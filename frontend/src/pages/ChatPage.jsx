import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import API from "../services/api";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import {
    HiSparkles
} from "react-icons/hi2";

function ChatPage() {

    // =====================================
    // STATES
    // =====================================

    const [prompt, setPrompt] = useState("");

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);


    // =====================================
    // LOAD CHAT FROM LOCAL STORAGE
    // =====================================

    useEffect(() => {

        const savedChats = localStorage.getItem("startup_ai_chats");

        if (savedChats) {

            setMessages(JSON.parse(savedChats));
        }

    }, []);


    // =====================================
    // SAVE CHAT TO LOCAL STORAGE
    // =====================================

    useEffect(() => {

        localStorage.setItem(

            "startup_ai_chats",

            JSON.stringify(messages)
        );

    }, [messages]);


    // =====================================
    // HANDLE SUBMIT
    // =====================================

    const handleSubmit = async () => {

        if (!prompt.trim()) return;

        // USER MESSAGE

        const userMessage = {

            type: "user",

            text: prompt
        };

        // ADD USER MESSAGE

        setMessages((prev) => [

            ...prev,

            userMessage
        ]);

        const currentPrompt = prompt;

        setPrompt("");

        try {

            setLoading(true);

            // API CALL

            const res = await API.post(

                "/run-workflow",

                {
                    startup_idea: currentPrompt
                }
            );

            console.log(res.data);

            // AI MESSAGE

            const aiMessage = {

                type: "ai",

                text:

                    res.data.response ||
                    res.data.output ||
                    res.data.result ||
                    "No response received",

                agent:

                    res.data.intent ||
                    res.data.agent ||
                    "AI Agent"
            };

            // ADD AI MESSAGE

            setMessages((prev) => [

                ...prev,

                aiMessage
            ]);
        }

        catch (err) {

            console.log(err);

            setMessages((prev) => [

                ...prev,

                {
                    type: "ai",

                    text: "Something went wrong.",

                    agent: "System"
                }
            ]);
        }

        finally {

            setLoading(false);
        }
    };


    // =====================================
    // CLEAR CHAT
    // =====================================

    const clearChat = () => {

        localStorage.removeItem("startup_ai_chats");

        setMessages([]);
    };


    // =====================================
    // UI
    // =====================================

    return (

        <div className="workspace-page">

            <div className="workspace-layout">

                {/* SIDEBAR */}

                <Sidebar />


                {/* MAIN */}

                <div className="workspace-main">

                    <Navbar />


                    {/* HEADER */}

                    <div className="workspace-header">

                        <div>

                            <h1 className="workspace-title">

                                AI Startup Workspace

                            </h1>

                            <p className="workspace-subtitle">

                                Multi-Agent Startup Intelligence Platform

                            </p>

                        </div>

                    </div>


                    {/* AGENT PILLS */}

                    <div className="agent-pills">

                        <div className="agent-pill market">
                            Market Agent
                        </div>

                        <div className="agent-pill branding">
                            Branding Agent
                        </div>

                        <div className="agent-pill finance">
                            Finance Agent
                        </div>

                        <div className="agent-pill roadmap">
                            Roadmap Agent
                        </div>

                        <div className="agent-pill strategy">
                            Strategy Agent
                        </div>

                    </div>


                    {/* CHAT AREA */}

                    <div className="chat-workspace">


                        {/* ALL MESSAGES */}

                        {

                            messages.map((msg, index) => (

                                <div

                                    key={index}

                                    className={

                                        msg.type === "user"

                                            ? "user-message-wrapper"

                                            : "ai-message-wrapper"
                                    }
                                >

                                    {

                                        msg.type === "user" ? (

                                            <div className="user-message">

                                                {msg.text}

                                            </div>

                                        ) : (

                                            <div className="ai-message-card">

                                                <div className="agent-response-header">

                                                    <div className="agent-badge">

                                                        {msg.agent}

                                                    </div>

                                                </div>

                                                <div className="ai-response-content markdown-content">

    <ReactMarkdown
        remarkPlugins={[remarkGfm]}
    >
        {msg.text}
    </ReactMarkdown>

</div>

                                            </div>
                                        )
                                    }

                                </div>
                            ))
                        }


                        {/* LOADING */}

                        {

                            loading && (

                                <div className="ai-message-wrapper">

                                    <div className="ai-message-card">

                                        <div className="agent-running">

                                            <HiSparkles />

                                            AI Agents Thinking...

                                        </div>

                                        <div className="typing-loader">

                                            <span></span>
                                            <span></span>
                                            <span></span>

                                        </div>

                                    </div>

                                </div>
                            )
                        }

                    </div>


                    {/* INPUT */}

                    <div className="sticky-chat-input">

                        <textarea

                            placeholder="Ask your AI startup team anything..."

                            value={prompt}

                            onChange={(e) =>
                                setPrompt(e.target.value)
                            }

                            className="modern-chat-textarea"
                        />


                        <button

                            className="modern-send-button"

                            onClick={handleSubmit}

                            disabled={loading}

                        >

                            {
                                loading
                                    ? "..."
                                    : "▲"
                            }

                        </button>

                    </div>


                    {/* CLEAR BUTTON */}

                    <button

                        onClick={clearChat}

                        style={{
                            marginTop: "16px",
                            padding: "12px 18px",
                            border: "none",
                            borderRadius: "14px",
                            background: "#ef4444",
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "600"
                        }}
                    >

                        Clear Chat

                    </button>

                </div>

            </div>

        </div>
    );
}

export default ChatPage;