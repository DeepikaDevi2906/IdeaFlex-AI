from langgraph.graph import (
    StateGraph,
    END
)

from ai.graph.state import (
    StartupState
)

from ai.graph.nodes import (

    router_node,

    market_node,

    branding_node,

    finance_node,

    roadmap_node,

    competitor_node,

    strategy_node,

    report_node
)

workflow = StateGraph(
    StartupState
)

workflow.add_node(
    "router",
    router_node
)

workflow.add_node(
    "market_agent",
    market_node
)

workflow.add_node(
    "branding_agent",
    branding_node
)

workflow.add_node(
    "finance_agent",
    finance_node
)

workflow.add_node(
    "roadmap_agent",
    roadmap_node
)

workflow.add_node(
    "competitor_agent",
    competitor_node
)

workflow.add_node(
    "strategy_agent",
    strategy_node
)
workflow.add_node(
    "report",
    report_node
)

workflow.set_entry_point(
    "router"
)

workflow.add_conditional_edges(

    "router",

    lambda state: state["intent"],

    {

        "market": "market_agent",

        "branding": "branding_agent",

        "finance": "finance_agent",

        "roadmap": "roadmap_agent",

        "competitor": "competitor_agent",

        "strategy": "strategy_agent",

        "report": "report"
    }
)

workflow.add_edge(
    "market_agent",
    END
)

workflow.add_edge(
    "branding_agent",
    END
)

workflow.add_edge(
    "finance_agent",
    END
)

workflow.add_edge(
    "roadmap_agent",
    END
)

workflow.add_edge(
    "competitor_agent",
    END
)

workflow.add_edge(
    "strategy_agent",
    END
)

startup_graph = workflow.compile()