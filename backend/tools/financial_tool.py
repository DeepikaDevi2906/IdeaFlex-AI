from services.openai_service import (
    generate_response
)
from ai.prompts.finance_prompt import FINANCE_PROMPT


def financial_tool(user_id,startup_idea):

    prompt = FINANCE_PROMPT.format(startup_idea=startup_idea)

    response = generate_response(

        user_id=user_id,

        query=prompt
    )

    return response