from langchain.tools import Tool

from tools.branding_tool import (
    branding_tool
)

from tools.competitor_tool import (
    competitor_tool
)

from tools.financial_tool import (
    finance_tool
)

from tools.market_tool import (
    market_tool
)

from tools.rag_tool import (
    rag_tool
)

from tools.report_tool import (
    report_tool
)

from tools.roadmap_tool import (
    roadmap_tool
)

from tools.startup_analysis_tool import (
    startup_analysis_tool
)

from tools.stratergy_tool import (
    strategy_tool
)

from tools.web_search_tool import (
    web_search_tool
)

rag_analysis_tool = Tool(

    name="RAG Analysis Tool",

    func=rag_tool,

    description="""
Use this tool for:
- document retrieval
- uploaded PDF analysis
- contextual startup insights
- semantic document search
"""
)

web_search_analysis_tool = Tool(

    name="Web Search Tool",

    func=web_search_tool,

    description="""
Use this tool for:
- latest startup trends
- internet research
- market updates
- external information retrieval
"""
)
market_analysis_tool = Tool(

    name="Market Analysis Tool",

    func=market_tool,

    description="""
Use this tool for:
- market research
- industry analysis
- startup opportunities
- market demand
- target audience analysis
"""
)

branding_analysis_tool = Tool(

    name="Branding Tool",

    func=branding_tool,

    description="""
Use this tool for:
- startup naming
- tagline generation
- brand positioning
- branding strategy
- brand voice creation
"""
)
financial_analysis_tool = Tool(

    name="Financial Tool",

    func=finance_tool,

    description="""
Use this tool for:
- monetization strategy
- pricing plans
- startup revenue streams
- financial planning
- startup business model analysis
"""
)

roadmap_analysis_tool = Tool(

    name="Roadmap Tool",

    func=roadmap_tool,

    description="""
Use this tool for:
- startup roadmap generation
- MVP planning
- launch strategy
- growth milestones
- scaling plans
"""
)
competitor_analysis_tool = Tool(

    name="Competitor Analysis Tool",

    func=competitor_tool,

    description="""
Use this tool for:
- competitor research
- market competition analysis
- startup differentiation
- competitor strengths and weaknesses
"""
)

startup_analysis_ai_tool = Tool(

    name="Startup Analysis Tool",

    func=startup_analysis_tool,

    description="""
Use this tool for:
- startup idea analysis
- business feasibility
- startup strengths and weaknesses
- market potential analysis
"""
)

strategy_analysis_tool = Tool(

    name="Strategy Tool",

    func=strategy_tool,

    description="""
Use this tool for:
- business strategy generation
- go-to-market strategy
- customer acquisition planning
- scaling strategy
- startup competitive advantage
"""
)
report_generation_tool = Tool(

    name="Report Generation Tool",

    func=report_tool,

    description="""
Use this tool for:
- complete startup reports
- startup business summaries
- startup consulting reports
- combined multi-agent analysis
"""
)


TOOLS = {

    "rag_tool":
    rag_analysis_tool,

    "web_search_tool":
    web_search_analysis_tool,

    "market_tool":
    market_analysis_tool,

    "branding_tool":
    branding_analysis_tool,

    "financial_tool":
    financial_analysis_tool,

    "roadmap_tool":
    roadmap_analysis_tool,

    "competitor_tool":
    competitor_analysis_tool,

    "startup_analysis_tool":
    startup_analysis_ai_tool,

    "strategy_tool":
    strategy_analysis_tool,

    "report_tool":
    report_generation_tool
}

all_tools = [

    rag_analysis_tool,

    web_search_analysis_tool,

    market_analysis_tool,

    branding_analysis_tool,

    financial_analysis_tool,

    roadmap_analysis_tool,

    competitor_analysis_tool,

    startup_analysis_ai_tool,

    strategy_analysis_tool,

    report_generation_tool
]