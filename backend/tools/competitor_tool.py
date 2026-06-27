from tools.web_search_tool import (
    web_search_tool
)

from ai.prompt_loader import load_prompt
def competitor_tool(user_id,startup_idea):

    query = load_prompt(
        agent="competitor",
        version="v1",
        startup_idea=startup_idea
    )

    results = web_search_tool(query)

    return results

