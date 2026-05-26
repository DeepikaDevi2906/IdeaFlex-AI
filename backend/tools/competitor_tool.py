from tools.web_search_tool import (
    web_search_tool
)
from ai.prompts.competitor_prompt import COMPETITOR_PROMPT
def competitor_tool(user_id,startup_idea):

    query =COMPETITOR_PROMPT.format(startup_idea=startup_idea)

    results = web_search_tool(query)

    return results

