from services.openai_service import generate_response
from ai.prompts.branding_prompt import BRANDING_PROMPT
def branding_tool(user_id,startup_idea):
    prompt=BRANDING_PROMPT.format(startup_idea=startup_idea)

    response=generate_response(
        user_id=user_id,

        query=prompt
    )
    return response