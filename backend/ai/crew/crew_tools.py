from crewai.tools import tool

from ai.agents.market_agent import (
    market_agent
)

from ai.agents.branding_agent import (
    branding_agent
)

from ai.agents.finance_agent import (
    financial_agent
)

from ai.agents.roadmap_agent import (
    roadmap_agent
)

from ai.agents.strategy_agent import (
    strategy_agent
)

from ai.agents.competitor_agent import (
    competitor_agent
)


# ===================================
# MARKET TOOL
# ===================================

@tool("Market Analysis Tool")
def market_tool(startup_idea: str):
    """
    Performs startup market analysis.
    """

    result = market_agent(

        "crew_user",

        startup_idea
    )

    return str(result)


# ===================================
# BRANDING TOOL
# ===================================

@tool("Branding Tool")
def branding_tool(startup_idea: str):
    """
    Creates startup branding strategy.
    """

    result = branding_agent(

        "crew_user",

        startup_idea
    )

    return str(result)


# ===================================
# FINANCE TOOL
# ===================================

@tool("Finance Tool")
def finance_tool(startup_idea: str):
    """
    Generates startup financial strategy.
    """

    result = financial_agent(

        "crew_user",

        startup_idea
    )

    return str(result)


# ===================================
# ROADMAP TOOL
# ===================================

@tool("Roadmap Tool")
def roadmap_tool(startup_idea: str):
    """
    Creates startup roadmap and MVP plan.
    """

    result = roadmap_agent(

        "crew_user",

        startup_idea
    )

    return str(result)


# ===================================
# STRATEGY TOOL
# ===================================

@tool("Strategy Tool")
def strategy_tool_func(startup_idea: str):
    """
    Generates startup growth strategy.
    """

    result = strategy_agent(

        "crew_user",

        startup_idea,

        "", "", "", ""
    )

    return str(result)


# ===================================
# COMPETITOR TOOL
# ===================================

@tool("Competitor Tool")
def competitor_tool_func(startup_idea: str):
    """
    Analyzes startup competitors.
    """

    result = competitor_agent(

        "crew_user",

        startup_idea
    )

    return str(result)