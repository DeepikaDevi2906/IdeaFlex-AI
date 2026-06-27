import chromadb

from chromadb.config import Settings


class MemoryManager:

    def __init__(self):

        self.client = chromadb.PersistentClient(

            path="./chroma_db"
        )

        self.conversation_collection = self.client.get_or_create_collection(

            name="conversation_memory"
        )

        self.agent_collection = self.client.get_or_create_collection(

            name="agent_memory"
        )

        self.workflow_collection = self.client.get_or_create_collection(

            name="workflow_memory"
        )

    def add_memory(

        self,

        collection,

        memory_id,

        content,

        metadata=None
    ):

        collection.add(

            documents=[content],

            metadatas=[metadata or {}],

            ids=[memory_id]
        )

    def search_memory(

        self,

        collection,

        query,

        n_results=3
    ):

        results = collection.query(

            query_texts=[query],

            n_results=n_results
        )

        return results