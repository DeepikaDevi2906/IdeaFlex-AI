from services.openai_service import generate_response
from ai.prompt_loader import load_prompt

def finance_tool(user_id, startup_idea):

    prompt = load_prompt(
        agent="finance",
        version="v1",
        startup_idea=startup_idea
    )

    response = generate_response(
        user_id=user_id,
        query=prompt
    )

    return response