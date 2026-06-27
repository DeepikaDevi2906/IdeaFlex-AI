from flask import (
    Blueprint,
    request,
    jsonify
)

from ai.graph.workflow import (
    startup_graph
)


workflow_bp = Blueprint(
    "workflow_bp",
    __name__
)


# -----------------------------------
# RUN WORKFLOW
# -----------------------------------
@workflow_bp.route(
    "/run-workflow",
    methods=["POST"]
)
def run_workflow():

    data = request.get_json()

    startup_idea = data.get(
        "startup_idea"
    )


    initial_state = {

        "startup_idea":
        startup_idea,

        "market_analysis":
        "",

        "branding":
        "",

        "finance":
        "",

        "roadmap":
        "",

        "competitors":
        "",

        "strategy":
        "",

        "final_report":
        ""
    }


    result = startup_graph.invoke({
    "user_id": "workflow_user",

    "user_input": startup_idea,

    "startup_idea": startup_idea,

    "intent": "",

    "response": "",

    "market_analysis": "",

    "branding": "",

    "finance": "",

    "roadmap": "",

    "competitors": "",

    "strategy": "",

    "conversation_history": []
})


    return jsonify({

    "response": result["response"],

    "intent": result["intent"]

})