from tools.competitor_tool import (
    competitor_tool
)

from services.openai_service import (
    generate_response
)


# -----------------------------------
# COMPETITOR AGENT
# -----------------------------------

def competitor_agent(user_id,startup_idea):

    search_results = competitor_tool(
        user_id,
        startup_idea
    )

    prompt = f"""

    You are an expert startup competitor analyst.

    Analyze the following competitor research.

    Startup Idea:
    {startup_idea}

    Search Results:
    {search_results}

    Generate:

    1. Top Existing Competitors
    2. Their Strengths
    3. Their Weaknesses
    4. Market Gaps
    5. Competitive Advantages
    6. Differentiation Opportunities

    Provide a professional competitor analysis.

    """

    response = generate_response(
        
         user_id=user_id,

        query=prompt
    )

    return {

        "agent":
        "Competitor Agent",

        "task":
        "Competitor Research & Analysis",

        "output":
        response
    }