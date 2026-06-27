import React from "react";
function WorkflowGraph() {

    const workflows = [

        "Idea Validation",

        "Market Intelligence",

        "Competitor Analysis",

        "Growth Strategy",

        "MVP Roadmap"
    ];

    return (

        <div className="workflow-container">

            <div className="workflow-header">

                <div>

                    <h2 className="workflow-title">

                        AI Workflow Pipeline

                    </h2>

                    <p className="workflow-subtitle">

                        Autonomous startup execution powered by AI agents

                    </p>

                </div>

            </div>
            <div className="workflow-list">

                {

                    workflows.map((step, index) => (

                        <div
                            className="workflow-item"
                            key={index}
                        >

                            <div className="workflow-left">

                                <div className="workflow-number">

                                    {index + 1}

                                </div>

                                {
                                    index !== workflows.length - 1 && (

                                        <div className="workflow-line"></div>
                                    )
                                }

                                <div>

                                    <h3 className="workflow-step-title">

                                        {step}

                                    </h3>

                                </div>

                            </div>


                            <div className="workflow-status">

                                Active

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default WorkflowGraph;