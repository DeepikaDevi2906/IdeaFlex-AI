from concurrent.futures import ThreadPoolExecutor, TimeoutError
from ai.agents.market_agent import market_agent
from ai.agents.competitor_agent import competitor_agent
from ai.agents.finance_agent import financial_agent
from ai.agents.branding_agent import branding_agent

def report_tool(user_id, startup_idea):
    with ThreadPoolExecutor(max_workers=4) as executor:
        market_f = executor.submit(market_agent, user_id, startup_idea)
        competitor_f = executor.submit(competitor_agent, user_id, startup_idea)
        financial_f = executor.submit(financial_agent, user_id, startup_idea)
        branding_f = executor.submit(branding_agent, user_id, startup_idea)

        market = market_f.result(timeout=60)
        competitor = competitor_f.result(timeout=60)
        financial = financial_f.result(timeout=60)
        branding = branding_f.result(timeout=60)

    return {
        "startup_idea": startup_idea,
        "market_analysis": market["output"],
        "competitor_analysis": competitor["output"],
        "financial_analysis": financial["output"],
        "branding_analysis": branding["output"]
    }