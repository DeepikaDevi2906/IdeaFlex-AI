from tools.branding_tool import branding_tool

def branding_agent(user_id,startup_idea):
    result=branding_tool(user_id,startup_idea)
    return {

        "agent":
        "Branding Agent",

        "task":
        "Startup Branding Strategy",

        "output":
        result
    }