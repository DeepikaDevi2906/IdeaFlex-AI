import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import API from "../services/api";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import {
    HiSparkles
} from "react-icons/hi2";
import "../styles/global.css";
const normalizeText = (value) => {
    if (!value) return "No response received";
    if (typeof value === "string" && value.trim()) return value;
    if (Array.isArray(value)) {
        if (value.length === 0) return "No response received";
        return value.map((item) =>
            typeof item === "string" ? item : JSON.stringify(item)
        ).join("\n\n");
    }
    if (typeof value === "object") return JSON.stringify(value, null, 2);
    return String(value);
};

function ChatPage() {
    const [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const savedChats = localStorage.getItem("startup_ai_chats");
        if (savedChats) {
            setMessages(JSON.parse(savedChats));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem(
            "startup_ai_chats",
            JSON.stringify(messages)
        );
    }, [messages]);
    const handleSubmit = async () => {

        if (!prompt.trim()) return;

        const userMessage = {
            type: "user",
            text: prompt
        };

        setMessages((prev) => [...prev, userMessage]);

        const currentPrompt = prompt;
        setPrompt("");

        try {
            setLoading(true);

            const res = await API.post("/run-workflow", {
                startup_idea: currentPrompt
            });

            console.log(res.data);

            const rawText =
                res.data.response ??
                res.data.output ??
                res.data.result ??
                null;

            const aiMessage = {
                type: "ai",
                text: normalizeText(rawText),
                agent: res.data.intent || res.data.agent || "AI Agent"
            };

            setMessages((prev) => [...prev, aiMessage]);
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
    const clearChat = () => {
        localStorage.removeItem("startup_ai_chats");
        setMessages([]);
    };
    return (

        <div className="workspace-page">

            <div className="workspace-layout">

                <Sidebar />

                <div className="workspace-main">

                    <Navbar />

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

                    <div className="agent-pills">
                        <div className="agent-pill market">Market Agent</div>
                        <div className="agent-pill branding">Branding Agent</div>
                        <div className="agent-pill finance">Finance Agent</div>
                        <div className="agent-pill roadmap">Roadmap Agent</div>
                        <div className="agent-pill strategy">Strategy Agent</div>
                    </div>

                    <div className="chat-workspace">

                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={
                                    msg.type === "user"
                                        ? "user-message-wrapper"
                                        : "ai-message-wrapper"
                                }
                            >
                                {msg.type === "user" ? (
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
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {typeof msg.text === "string" ? msg.text : normalizeText(msg.text)}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {loading && (
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
                        )}

                    </div>

                    <div className="sticky-chat-input">
                        <textarea
                            placeholder="Ask your AI startup team anything..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="modern-chat-textarea"
                        />
                        <button
                            className="modern-send-button"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? "..." : "▲"}
                        </button>
                    </div>

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