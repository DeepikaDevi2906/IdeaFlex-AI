from ddgs import DDGS

def web_search_tool(query):
    try:
        with DDGS() as ddgs:
            results = list(ddgs.text(query, max_results=5))
            return results
    except Exception as e:
        print(f"Web search failed: {e}")
        return []