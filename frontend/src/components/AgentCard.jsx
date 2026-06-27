import React from "react";
function AgentCard({ icon, title, description, status }) {

    return (

        <div className="agent-card">

            <div className="agent-top">

                <div className="agent-icon">
                    {icon}
                </div>

                <div className={`status-badge ${status}`}>
                    {status}
                </div>

            </div>

            <div className="agent-content">

                <h3 className="agent-title">
                    {title}
                </h3>

                <p className="agent-description">
                    {description}
                </p>

            </div>

            <button className="agent-btn">
                Open Agent
            </button>

        </div>
    );
}

export default AgentCard;