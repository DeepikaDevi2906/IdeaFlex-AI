from deepeval.test_case import LLMTestCase
from deepeval.metrics import FaithfulnessMetric

from services.openai_service import generate_response
from services.rag_service import retrieve_context
from mlflow_tracking.tracker import log_metric

def evaluate_faithfulness():

    query = "Suggest an AI startup for agriculture."

    response = generate_response(
        user_id=1,
        query=query
    )

    context = retrieve_context(query)

    test_case = LLMTestCase(
        input=query,
        actual_output=response,
        retrieval_context=context
    )

    metric = FaithfulnessMetric()
    
    metric.measure(test_case)
    
    log_metric(
        "faithfulness",
        metric.score
    )

    print("\n===== Faithfulness =====")
    print(metric.score)

    return metric.score