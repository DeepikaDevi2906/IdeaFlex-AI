from tools.report_tool import report_tool

def report_agent(user_id, startup_idea):
    result = report_tool(user_id, startup_idea)
    return {
        "agent": "Report Agent",
        "task": "Complete Startup Report",
        "output": result
    }