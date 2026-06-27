from evaluation.answer_relevancy import evaluate_answer_relevancy
from evaluation.faithfulness import evaluate_faithfulness
from evaluation.hallucination import evaluate_hallucination
from evaluation.rag_evaluation import evaluate_rag

from mlflow_tracking.tracker import *

start_experiment()

log_param("model", "gpt-4.1-mini")
log_param("embedding_model", "text-embedding-3-small")
log_param("vector_db", "FAISS")
log_param("framework", "LangChain")

print("=" * 40)
print("IdeaFlex AI Evaluation")
print("=" * 40)

evaluate_answer_relevancy()

evaluate_faithfulness()

evaluate_hallucination()

evaluate_rag()

print("=" * 40)

end_experiment()