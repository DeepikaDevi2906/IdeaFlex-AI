import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import API from "../services/api";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import {
    HiSparkles,
    HiChartBar,
    HiCpuChip
} from "react-icons/hi2";

function StartupAnalysis() {

    const [idea, setIdea] = useState("");

    const [analysis, setAnalysis] = useState("");

    const [loading, setLoading] = useState(false);


    // ===================================
    // HANDLE ANALYSIS
    // ===================================

    const handleAnalyze = async () => {

        if (!idea.trim()) return;

        try {

            setLoading(true);

            setAnalysis("");


            const res = await API.post(

                "/run-workflow",

                {
                    startup_idea: `
                    
                    Generate a complete startup analysis for:
                    
                    ${idea}
                    
                    `
                }
            );


            setAnalysis(

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

                {/* SIDEBAR */}

                <Sidebar />


                {/* MAIN */}

                <div className="main-content">

                    <Navbar />


                    {/* HERO */}

                    <div className="hero-section">

                        <div className="hero-badge">

                            <HiSparkles />

                            AI Startup Analysis Engine

                        </div>


                        <h1 className="hero-title">

                            Deep Startup
                            <span> Intelligence</span>

                        </h1>


                        <p className="hero-subtitle">

                            Analyze startup potential using autonomous AI agents,
                            market intelligence,
                            financial insights,
                            competitor research,
                            and strategic planning.

                        </p>

                    </div>


                    {/* ANALYSIS CARD */}

                    <div className="startup-form-container">

                        <div className="startup-form-header">

                            <div className="startup-form-icon">

                                <HiCpuChip />

                            </div>

                            <div>

                                <h2>

                                    Startup Intelligence Analysis

                                </h2>

                                <p>

                                    Let AI agents evaluate your startup idea

                                </p>

                            </div>

                        </div>


                        {/* TEXTAREA */}

                        <textarea

                            placeholder="Describe your startup idea in detail..."

                            value={idea}

                            onChange={(e) =>
                                setIdea(e.target.value)
                            }

                            style={{
                                minHeight: "180px"
                            }}
                        />


                        {/* BUTTON */}

                        <button

                            className="startup-submit-btn"

                            onClick={handleAnalyze}

                        >

                            {

                                loading

                                    ? "Analyzing Startup..."

                                    : "Generate Analysis"
                            }

                        </button>

                    </div>


                    {/* RESPONSE */}

                    {

                        analysis && (

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

                                        Startup Analysis Report

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

                                        {analysis}

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

export default StartupAnalysis;