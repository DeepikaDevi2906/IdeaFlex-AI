# -----------------------------------
# AGENT MEMORY
# -----------------------------------

agent_memory = {}


def save_agent_output(
    agent_name,
    output
):

    agent_memory[agent_name] = output


def get_agent_memory():

    return agent_memory