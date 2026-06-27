from ragas import EvaluationDataset, SingleTurnSample, evaluate

from ragas.metrics import (
    Faithfulness,
    AnswerRelevancy,
    ContextPrecision,
    ContextRecall
)

from services.openai_service import generate_response
from services.rag_service import retrieve_context

query = "Suggest an AI startup for agriculture."

contexts = retrieve_context(query)

response = generate_response(
    user_id=1,
    query=query
)

sample = SingleTurnSample(
    user_input=query,
    response=response,
    retrieved_contexts=contexts,
    reference="""
Build an AI startup that helps farmers detect crop diseases
using drones and computer vision.
"""
)

dataset = EvaluationDataset(samples=[sample])

result = evaluate(
    dataset=dataset,
    metrics=[
        Faithfulness(),
        AnswerRelevancy(),
        ContextPrecision(),
        ContextRecall()
    ]
)

print(result)