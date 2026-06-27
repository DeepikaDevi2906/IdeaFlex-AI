from tools.financial_tool import finance_tool
def financial_agent(user_id,startup_idea):
    result=finance_tool(user_id,startup_idea)
    return{
        "agent":
        "Finance Agent",

        "task":
        "Startup Financial Planning",

        "output":
        result
    }