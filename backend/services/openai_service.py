from openai import OpenAI

from config import Config

from services.rag_service import (
    retrieve_context
)

from ai.memory.conversation_memory import (

    save_conversation,

    get_relevant_conversations
)

client = OpenAI(
    api_key=Config.OPENAI_API_KEY
)


# =====================================
# GENERAL LLM CALL
# =====================================

def ask_llm(prompt):

    response = client.chat.completions.create(

        model="gpt-4.1-mini",

        messages=[

            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content


# =====================================
# GENERATE RESPONSE
# =====================================

def generate_response(

    user_id,

    query
):

    # =================================
    # RAG CONTEXT
    # =================================

    context = retrieve_context(
        query
    )

    context_text = "\n\n".join(
        context
    )


    # =================================
    # MEMORY CONTEXT
    # =================================

    memory_results = get_relevant_conversations(

        user_id,

        query
    )

    previous_context = ""

    if memory_results["documents"]:

        docs = memory_results["documents"][0]

        previous_context = "\n".join(docs)


    # =================================
    # FINAL PROMPT
    # =================================

    final_prompt = f"""

    You are an AI Startup Consultant.

    Use previous memory and context
    to answer intelligently.


    PREVIOUS MEMORY:
    {previous_context}


    RAG CONTEXT:
    {context_text}


    USER QUESTION:
    {query}

    """


    # =================================
    # AI RESPONSE
    # =================================

    ai_response = ask_llm(
        final_prompt
    )


    # =================================
    # SAVE MEMORY
    # =================================

    save_conversation(

        user_id=user_id,

        user_prompt=query,

        ai_response=ai_response
    )


    return ai_response