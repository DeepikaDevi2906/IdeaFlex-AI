from tools.report_tool import report_tool

def report_agent(startup_idea):
    result=report_tool(startup_idea)
    return {

        "agent":
        "Report Agent",

        "task":
        "Complete Startup Report",

        "output":
        result
    }