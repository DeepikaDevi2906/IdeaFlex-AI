import React from "react";
import {
    HiSparkles,
    HiPaperAirplane
} from "react-icons/hi";


function ChatBox({

    prompt,

    setPrompt,

    handleSubmit,

    loading

}) {

    return (

        <div className="modern-chatbox-container">

            <div className="modern-chatbox-header">

                <div className="modern-ai-logo">

                    <HiSparkles />

                </div>


                <div>

                    <h2 className="modern-chat-title">

                        AI Startup Workspace

                    </h2>

                    <p className="modern-chat-subtitle">

                        Multi-Agent Startup Intelligence Platform

                    </p>

                </div>

            </div>

            <div className="modern-agent-pills">

                <div className="modern-agent-pill market">

                    Market

                </div>

                <div className="modern-agent-pill branding">

                    Branding

                </div>

                <div className="modern-agent-pill finance">

                    Finance

                </div>

                <div className="modern-agent-pill roadmap">

                    Roadmap

                </div>

                <div className="modern-agent-pill strategy">

                    Strategy

                </div>

            </div>

            <div className="modern-input-wrapper">

                <textarea

                    placeholder="Ask your AI startup team anything..."

                    value={prompt}

                    onChange={(e) =>
                        setPrompt(e.target.value)
                    }

                    className="modern-chat-textarea"
                />


                <button

                    className="modern-send-btn"

                    onClick={handleSubmit}

                >

                    {
                        loading
                            ? "..."
                            : <HiPaperAirplane />
                    }

                </button>

            </div>

            <div className="quick-prompts">

                <button
                    onClick={() =>
                        setPrompt(
                            "Generate MVP roadmap for AI tourism startup"
                        )
                    }
                    className="quick-prompt-btn"
                >

                    MVP Roadmap

                </button>


                <button
                    onClick={() =>
                        setPrompt(
                            "Do market analysis for AI tourism startup"
                        )
                    }
                    className="quick-prompt-btn"
                >

                    Market Analysis

                </button>


                <button
                    onClick={() =>
                        setPrompt(
                            "Give branding ideas for AI tourism startup"
                        )
                    }
                    className="quick-prompt-btn"
                >

                    Branding

                </button>


                <button
                    onClick={() =>
                        setPrompt(
                            "Give go to market strategy for AI tourism startup"
                        )
                    }
                    className="quick-prompt-btn"
                >

                    Strategy

                </button>

            </div>

        </div>
    );
}

export default ChatBox;