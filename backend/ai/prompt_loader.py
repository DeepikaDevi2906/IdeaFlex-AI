from pathlib import Path
def load_prompt(
    agent: str,
    version: str,
    **kwargs
):

    prompt_path = (
        Path(__file__).parent
        / "prompts"
        / agent
        / f"{version}.txt"
    )

    with open(prompt_path, "r", encoding="utf-8") as file:
        template = file.read()

    return template.format(**kwargs)