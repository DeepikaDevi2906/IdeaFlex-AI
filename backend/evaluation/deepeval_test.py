from deepeval.test_case import LLMTestCase
from deepeval.metrics import AnswerRelevancyMetric
from services.openai_service import generate_response

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

score = metric.measure(test_case)

print(score)