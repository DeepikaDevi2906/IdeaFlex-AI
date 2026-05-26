from typing import TypedDict, List


class StartupState(TypedDict):
    user_id: str

    user_input: str

    startup_idea: str

    intent: str

    response: str

    market_analysis: str

    branding: str

    finance: str

    roadmap: str

    competitors: str

    strategy: str

    conversation_history: List[str]