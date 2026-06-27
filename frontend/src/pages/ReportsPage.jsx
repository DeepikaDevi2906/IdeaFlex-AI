import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import API from "../services/api";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import "../styles/global.css";
import {
    HiSparkles,
    HiDocumentText,
    HiCalendarDays
} from "react-icons/hi2";


function ReportsPage() {

    const [reports, setReports] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchReports();

    }, []);


    const fetchReports = async () => {

        try {

            setLoading(true);

            setError("");


            const res = await API.get(

                "/reports"
            );


            console.log(
                "REPORTS:",
                res.data
            );


            setReports(

                Array.isArray(res.data)
                    ? res.data
                    : []
            );

        }

        catch (err) {

            console.log(err);

            setError(

                "Failed to load reports."
            );
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

                            AI Startup Reports

                        </div>


                        <h1 className="hero-title">

                            AI Generated
                            <span> Business Reports</span>

                        </h1>


                        <p className="hero-subtitle">

                            Explore startup intelligence,
                            market analysis,
                            competitor research,
                            and AI-generated startup evaluations.

                        </p>

                    </div>

                    {

                        loading && (

                            <div
                                className="startup-response-card"
                            >

                                <h3>

                                    Loading Reports...

                                </h3>

                            </div>

                        )
                    }

                    {

                        error && (

                            <div
                                className="startup-response-card"
                            >

                                <h3>

                                    {error}

                                </h3>

                            </div>

                        )
                    }

                    {

                        !loading &&
                        reports.length === 0 &&
                        !error && (

                            <div
                                className="startup-response-card"
                            >

                                <h3>

                                    No Reports Found

                                </h3>

                                <p>

                                    Upload startup files
                                    or generate startup analysis
                                    to see reports here.

                                </p>

                            </div>

                        )
                    }


                    {

                        reports.map((report) => (

                            <div

                                key={report.id}

                                className="startup-response-card"

                                style={{
                                    marginBottom: "30px"
                                }}
                            >

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "20px",
                                        flexWrap: "wrap",
                                        gap: "10px"
                                    }}
                                >

                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px"
                                        }}
                                    >

                                        <HiDocumentText
                                            style={{
                                                fontSize: "28px",
                                                color: "#2563eb"
                                            }}
                                        />


                                        <div>

                                            <h2
                                                style={{
                                                    margin: 0,
                                                    color: "#111827"
                                                }}
                                            >

                                                {
                                                    report.title
                                                }

                                            </h2>

                                        </div>

                                    </div>


                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            color: "#6b7280",
                                            fontSize: "14px"
                                        }}
                                    >

                                        <HiCalendarDays />

                                        {

                                            report.created_at
                                                ? new Date(
                                                    report.created_at
                                                ).toLocaleString()
                                                : "Unknown Date"
                                        }

                                    </div>

                                </div>


                                <div
                                    className="markdown-content"
                                >

                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                    >

                                        {

                                            report.full_report ||
                                            "No report content available."
                                        }

                                    </ReactMarkdown>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default ReportsPage;