from deepeval.test_case import LLMTestCase
from deepeval.metrics import AnswerRelevancyMetric

from services.openai_service import generate_response

from mlflow_tracking.tracker import log_metric

def evaluate_answer_relevancy():

    query = "Suggest an AI startup for agriculture."

    response = generate_response(
        user_id=1,
        query=query
    )

    test_case = LLMTestCase(
        input=query,
        actual_output=response
    )

    metric = AnswerRelevancyMetric()

    metric.measure(test_case)
    log_metric(
        "answer_relevancy",
        metric.score
    )
    print("\n===== Answer Relevancy =====")
    print(metric.score)

    return metric.score