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

from ai.agents.competitor_agent import (
    competitor_agent
)

from ai.agents.strategy_agent import (
    strategy_agent
)

from ai.agents.report_agent import (
    report_agent
)
def router_node(state):

    print("\n========== ROUTER NODE ==========")

    print("USER INPUT:", state["user_input"])

    message = state["user_input"].lower()

    if any(word in message for word in [
        "report",
        "full startup",
        "complete startup",
        "generate report",
        "startup blueprint",
        "complete analysis"
    ]):
        intent = "report"

    elif any(word in message for word in [
        "strategy",
        "growth strategy",
        "go to market",
        "gtm",
        "scaling"
    ]):
        intent = "strategy"

    elif any(word in message for word in [
        "market",
        "audience",
        "industry",
        "trend",
        "customer",
        "market size",
        "target users"
    ]):
        intent = "market"

    elif any(word in message for word in [
        "branding",
        "brand",
        "logo",
        "tagline",
        "startup name",
        "identity",
        "brand identity"
    ]):
        intent = "branding"

    elif any(word in message for word in [
        "finance",
        "financial",
        "revenue",
        "pricing",
        "pricing model",
        "subscription",
        "funding",
        "investment",
        "budget",
        "cost",
        "expenses",
        "profit",
        "income",
        "monetization",
        "cash flow"
    ]):
        intent = "finance"

    elif any(word in message for word in [
        "mvp",
        "roadmap",
        "timeline",
        "launch",
        "milestone",
        "feature rollout"
    ]):
        intent = "roadmap"

    elif any(word in message for word in [
        "competitor",
        "competition",
        "rival",
        "existing companies",
        "alternatives"
    ]):
        intent = "competitor"

    else:
        intent = "strategy"

    print("DETECTED INTENT:", intent)

    state["intent"] = intent

    return state
def market_node(state):

    print("\n========== MARKET NODE ==========")

    result = market_agent(
        state["user_id"],
        state["startup_idea"]
    )

    print("MARKET RESULT:")
    print(result)
    print("MARKET AGENT COMPLETED")

    state["market_analysis"] = result["output"]
    state["response"] = result["output"]

    return state

def branding_node(state):

    print("\n========== BRANDING NODE ==========")

    result = branding_agent(
        state["user_id"],
        state["startup_idea"]
    )

    print("BRANDING RESULT:")
    print(result)
    print("BRANDING AGENT COMPLETED")

    state["branding"] = result["output"]
    state["response"] = result["output"]

    return state

def finance_node(state):

    print("\n========== FINANCE NODE ==========")

    result = financial_agent(
        state["user_id"],
        state["startup_idea"]
    )

    print("FINANCE RESULT:")
    print(result)
    print("FINANCE AGENT COMPLETED")

    state["finance"] = result["output"]
    state["response"] = result["output"]

    return state

def competitor_node(state):

    print("\n========== COMPETITOR NODE ==========")

    result = competitor_agent(
        state["user_id"],
        state["startup_idea"]
    )

    print("COMPETITOR RESULT:")
    print(result)
    print("COMPETITOR AGENT COMPLETED")

    state["competitors"] = result["output"]
    state["response"] = result["output"]

    return state

def roadmap_node(state):

    print("\n========== ROADMAP NODE ==========")

    result = roadmap_agent(
        state["user_id"],
        state["startup_idea"]
    )

    print("ROADMAP RESULT:")
    print(result)
    print("ROADMAP AGENT COMPLETED")

    state["roadmap"] = result["output"]
    state["response"] = result["output"]

    return state

def strategy_node(state):

    print("\n========== STRATEGY NODE ==========")

    result = strategy_agent(
        state["user_id"],
        state["startup_idea"],
        state["market_analysis"],
        state["finance"],
        state["competitors"],
        state["roadmap"]
    )

    print("STRATEGY RESULT:")
    print(result)
    print("STRATEGY AGENT COMPLETED")

    state["strategy"] = result["output"]
    state["response"] = result["output"]

    return state


def report_node(state):

    print("\n========== REPORT NODE ==========")

    result = report_agent(
        state["user_id"],
        state["startup_idea"]
    )

    print("REPORT RESULT:")
    print(result)
    print("REPORT AGENT COMPLETED")

    state["response"] = result["output"]

    return state