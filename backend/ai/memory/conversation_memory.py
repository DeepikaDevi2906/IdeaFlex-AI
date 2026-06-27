import uuid

from ai.memory.memory_manager import (
    MemoryManager
)

memory_manager = MemoryManager()

def save_conversation(

    user_id,

    user_prompt,

    ai_response
):

    memory_text = f"""

    USER:
    {user_prompt}

    AI:
    {ai_response}

    """

    memory_manager.add_memory(

        collection=memory_manager.conversation_collection,

        memory_id=str(uuid.uuid4()),

        content=memory_text,

        metadata={

            "type": "conversation",

            "user_id": str(user_id)
        }
    )

def get_relevant_conversations(

    user_id,

    query
):

    results = memory_manager.conversation_collection.query(

        query_texts=[query],

        n_results=3,

        where={

            "user_id": str(user_id)
        }
    )

    return results