from ai.prompts.market_prompt import (
    MARKET_PROMPT
)

from services.openai_service import (
    ask_llm
)

from tools.rag_tool import (
    rag_tool
)

from tools.web_search_tool import (
    web_search_tool
)

from tools.competitor_tool import (
    competitor_tool
)


# -----------------------------------
# MARKET TOOL
# -----------------------------------
def market_tool(user_id,startup_idea):

    rag_results = rag_tool(
        startup_idea
    )

    web_results = web_search_tool(
        startup_idea
    )

    competitor_results = competitor_tool(
        user_id,
        startup_idea
    )


    prompt = MARKET_PROMPT.format(

        startup_idea=startup_idea,

        rag_results=rag_results,

        web_results=web_results,

        competitor_results=competitor_results
    )


    result = ask_llm(
        prompt
    )

    return result