import os
import fitz

from dotenv import load_dotenv

from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

load_dotenv()

OPENAI_API_KEY=os.getenv("OPENAI_API_KEY")

vector_store=None

def extract_text_from_pdf(file_path):
    doc=fitz.open(file_path)
    text=""
    for page in doc:
        text+=page.get_text()
    doc.close()
    return text

def split_text(text):
    splitter=RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )
    chunks=splitter.split_text(text)
    return chunks

def create_vector_store(chunks):
    global vector_store
    embeddings=OpenAIEmbeddings(api_key=OPENAI_API_KEY)
    vector_store=FAISS.from_texts(chunks,embeddings)
    return vector_store

def process_pdf(file_path):
    text=extract_text_from_pdf(file_path)
    chunks=split_text(text)
    create_vector_store(chunks)
    return {

        "success": True,

        "chunks": len(chunks)
    }

def retrieve_context(query,k=4):
    global vector_store
    if vector_store is None:
        return []
    
    docs=vector_store.similarity_search(
        query,
        k=k
    )
    context=[]
    for doc in docs:
        context.append(doc.page_content)

    return context