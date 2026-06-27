workflow_memory = {}

def update_workflow(key, value):
    workflow_memory[key] = value


def get_workflow_memory():
    return workflow_memory