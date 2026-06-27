from services.openai_service import generate_response
from ai.prompt_loader import load_prompt

def strategy_tool(
    user_id,
    startup_idea,
    market_analysis,
    finance,
    competitors,
    roadmap
):
    prompt = load_prompt(
        agent="strategy",
        version="v1",
        startup_idea=startup_idea,
        market_analysis=market_analysis,
        finance=finance,
        competitors=competitors,
        roadmap=roadmap
    )

    response = generate_response(
        user_id=user_id,
        query=prompt
    )

    return response