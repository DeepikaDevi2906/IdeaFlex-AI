import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import API from "../services/api";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import "../styles/global.css";
import {
    HiSparkles,
    HiRocketLaunch,
    HiCpuChip,
    HiChartBar
} from "react-icons/hi2";

function StartupPage() {

    const [startupName, setStartupName] = useState("");

    const [idea, setIdea] = useState("");

    const [industry, setIndustry] = useState("");

    const [targetAudience, setTargetAudience] = useState("");

    const [response, setResponse] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {

        try {

            setLoading(true);

            setResponse("");


            const startupIdea = `

            Startup Name:
            ${startupName}

            Industry:
            ${industry}

            Target Audience:
            ${targetAudience}

            Startup Idea:
            ${idea}

            Generate a complete startup report.

            `;


            const res = await API.post(

                "/run-workflow",

                {
                    startup_idea: startupIdea
                }
            );


            setResponse(

                res.data.response
            );

            console.log(res.data);

        }

        catch (err) {

            console.log(err);
        }

        finally {

            setLoading(false);
        }
    };


    return (

        <div className="page">

            <div className="dashboard-layout">

                <Sidebar />
                <div className="main-content">

                    <Navbar />

                    <div className="hero-section">

                        <div className="hero-badge">

                            <HiSparkles />

                            AI Startup Intelligence

                        </div>


                        <h1 className="hero-title">

                            Analyze Your
                            <span> Startup Idea</span>

                        </h1>


                        <p className="hero-subtitle">

                            Generate autonomous AI-powered startup reports,
                            market intelligence,
                            financial strategies,
                            competitor analysis,
                            and MVP roadmaps.

                        </p>

                    </div>

                    <div className="startup-form-container">

                        <div className="startup-form-header">

                            <div className="startup-form-icon">

                                <HiRocketLaunch />

                            </div>

                            <div>

                                <h2>

                                    Startup Analysis

                                </h2>

                                <p>

                                    Submit your startup idea to AI agents

                                </p>

                            </div>

                        </div>

                        <div className="startup-form-grid">

                            <input
                                type="text"
                                placeholder="Startup Name"
                                value={startupName}
                                onChange={(e) =>
                                    setStartupName(e.target.value)
                                }
                            />


                            <input
                                type="text"
                                placeholder="Industry"
                                value={industry}
                                onChange={(e) =>
                                    setIndustry(e.target.value)
                                }
                            />

                        </div>

                        <input
                            type="text"
                            placeholder="Target Audience"
                            value={targetAudience}
                            onChange={(e) =>
                                setTargetAudience(e.target.value)
                            }
                        />

                        <textarea
                            placeholder="Describe your startup idea..."
                            value={idea}
                            onChange={(e) =>
                                setIdea(e.target.value)
                            }
                        />

                        <button
                            className="startup-submit-btn"
                            onClick={handleSubmit}
                        >

                            {
                                loading
                                    ? "AI Agents Working..."
                                    : "Analyze Startup"
                            }

                        </button>

                        {
                            loading && (

                                <div
                                    style={{
                                        marginTop: "30px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15px"
                                    }}
                                >

                                    <div className="workflow-item">

                                        <div className="workflow-left">

                                            <div className="workflow-number">

                                                1

                                            </div>

                                            <div>

                                                <h3
                                                    className="workflow-step-title"
                                                >

                                                    Market Agent

                                                </h3>

                                                <p
                                                    style={{
                                                        opacity: 0.7
                                                    }}
                                                >

                                                    Analyzing startup market opportunities...

                                                </p>

                                            </div>

                                        </div>

                                        <div className="workflow-status">

                                            Running

                                        </div>

                                    </div>


                                    <div className="workflow-item">

                                        <div className="workflow-left">

                                            <div className="workflow-number">

                                                2

                                            </div>

                                            <div>

                                                <h3
                                                    className="workflow-step-title"
                                                >

                                                    Competitor Agent

                                                </h3>

                                                <p
                                                    style={{
                                                        opacity: 0.7
                                                    }}
                                                >

                                                    Researching competitors and market gaps...

                                                </p>

                                            </div>

                                        </div>

                                        <div className="workflow-status">

                                            Active

                                        </div>

                                    </div>


                                    <div className="workflow-item">

                                        <div className="workflow-left">

                                            <div className="workflow-number">

                                                3

                                            </div>

                                            <div>

                                                <h3
                                                    className="workflow-step-title"
                                                >

                                                    Finance Agent

                                                </h3>

                                                <p
                                                    style={{
                                                        opacity: 0.7
                                                    }}
                                                >

                                                    Generating monetization and pricing strategies...

                                                </p>

                                            </div>

                                        </div>

                                        <div className="workflow-status">

                                            Thinking

                                        </div>

                                    </div>


                                    <div className="workflow-item">

                                        <div className="workflow-left">

                                            <div className="workflow-number">

                                                4

                                            </div>

                                            <div>

                                                <h3
                                                    className="workflow-step-title"
                                                >

                                                    Strategy Agent

                                                </h3>

                                                <p
                                                    style={{
                                                        opacity: 0.7
                                                    }}
                                                >

                                                    Creating GTM and growth strategy...

                                                </p>

                                            </div>

                                        </div>

                                        <div className="workflow-status">

                                            Processing

                                        </div>

                                    </div>

                                </div>

                            )
                        }

                    </div>

                    {
                        response && (

                            <div className="startup-response-card">

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginBottom: "20px"
                                    }}
                                >

                                    <HiChartBar
                                        style={{
                                            color: "white",
                                            fontSize: "24px"
                                        }}
                                    />

                                    <h3
                                        style={{
                                            color: "white"
                                        }}
                                    >

                                        AI Startup Report

                                    </h3>

                                </div>


                                <div
                                    className="markdown-content"
                                    style={{

                                        color: "white",

                                        lineHeight: "1.8"
                                    }}
                                >

                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                    >

                                        {response}

                                    </ReactMarkdown>

                                </div>

                            </div>

                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default StartupPage;