from tools.stratergy_tool import (
    strategy_tool
)


# -----------------------------------
# STRATEGY AGENT
# -----------------------------------

def strategy_agent(
        
    user_id,

    startup_idea,

    market_analysis,

    finance,

    competitors,

    roadmap
):

    result = strategy_tool(

        user_id,

        startup_idea,

        market_analysis,

        finance,

        competitors,

        roadmap
    )

    return {

        "agent":
        "Strategy Agent",

        "task":
        "Startup Strategy Planning",

        "output":
        result
    }