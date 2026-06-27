from deepeval.test_case import LLMTestCase
from deepeval.metrics import HallucinationMetric

from services.openai_service import generate_response
from services.rag_service import retrieve_context
from mlflow_tracking.tracker import log_metric

def evaluate_hallucination():

    query = "Suggest an AI startup for agriculture."

    response = generate_response(
        user_id=1,
        query=query
    )

    context = retrieve_context(query)

    test_case = LLMTestCase(
        input=query,
        actual_output=response,
        context=context
    )

    metric = HallucinationMetric()

    metric.measure(test_case)
    log_metric(
        "hallucination",
        metric.score
    )

    print("\n===== Hallucination =====")
    print(metric.score)

    return metric.score