from tools.roadmap_tool import roadmap_tool

def roadmap_agent(user_id,startup_idea):
    result=roadmap_tool(user_id,startup_idea)
    return{
        "agent":
        "Roadmap Agent",

        "task":
        "Startup Execution Roadmap",

        "output":
        result
    }