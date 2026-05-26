from services.rag_service import retrieve_context

def rag_tool(query):

    context=retrieve_context(query)
    return {

        "query": query,

        "context": context
    }