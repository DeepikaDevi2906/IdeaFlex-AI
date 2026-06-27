from tools.market_tool import market_tool

def market_agent( user_id,startup_idea):
    result=market_tool(user_id,startup_idea)
    return {
        "agent":
        "Market Agent",

        "task":
        "Market Research",

        "output":
        result
    }