from tools.web_search_tool import web_search_tool

def roadmap_tool(user_id, startup_idea):
    query = f"""
    Startup Idea:
    {startup_idea}

    Generate:

    - MVP Development Plan
    - Market Validation Phase
    - Launch Strategy
    - Growth Milestones
    - Scaling Plan
    - Long-Term Vision
    """

    results = web_search_tool(query)

    return results