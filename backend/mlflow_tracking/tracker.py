import mlflow

mlflow.set_experiment("IdeaFlex AI")


def start_experiment():

    return mlflow.start_run()


def log_param(name, value):

    mlflow.log_param(name, value)


def log_metric(name, value):

    mlflow.log_metric(name, value)


def end_experiment():

    mlflow.end_run()