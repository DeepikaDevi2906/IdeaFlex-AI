import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadBox from "../components/UploadBox";

import API from "../services/api";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import {
    HiCloudArrowUp,
    HiSparkles,
    HiCheckCircle,
    HiCpuChip
} from "react-icons/hi2";

function UploadPage() {

    const [file, setFile] = useState(null);

    const [message, setMessage] = useState("");

    const [analysis, setAnalysis] = useState("");

    const [loading, setLoading] = useState(false);


    // ===================================
    // HANDLE UPLOAD
    // ===================================

    const handleUpload = async () => {

        if (!file) {

            setMessage("Please select a file.");

            return;
        }

        try {

            setLoading(true);

            setAnalysis("");

            const formData = new FormData();

            formData.append("file", file);


            const res = await API.post(

                "/upload",

                formData
            );


            setMessage(

                res.data.message
            );


            setAnalysis(

                res.data.analysis
            );

            console.log(res.data);

        }

        catch (err) {

            console.log(err);

            setMessage(
                "File upload failed."
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


                    {/* HERO */}

                    <div className="hero-section">

                        <div className="hero-badge">

                            <HiSparkles />

                            AI File Processing

                        </div>


                        <h1 className="hero-title">

                            Upload
                            <span> Startup Files</span>

                        </h1>


                        <p className="hero-subtitle">

                            Upload pitch decks,
                            startup ideas,
                            market research,
                            and business documents
                            for AI-powered analysis.

                        </p>

                    </div>


                    {/* UPLOAD */}

                    <div className="upload-clean-container">

                        <div className="upload-clean-header">

                            <div className="upload-clean-icon">

                                <HiCloudArrowUp />

                            </div>

                            <div>

                                <h2>

                                    Upload Documents

                                </h2>

                                <p>

                                    AI agents will process and analyze your files

                                </p>

                            </div>

                        </div>


                        <UploadBox

                            handleChange={(e) =>
                                setFile(e.target.files[0])
                            }

                            handleUpload={handleUpload}
                        />

                    </div>


                    {/* LOADING */}

                    {

                        loading && (

                            <div className="upload-status-card">

                                <div className="upload-loader"></div>

                                <div>

                                    <h3>

                                        Processing File...

                                    </h3>

                                    <p>

                                        AI agents are analyzing your startup document

                                    </p>

                                </div>

                            </div>

                        )
                    }


                    {/* MESSAGE */}

                    {

                        message && !loading && (

                            <div className="upload-status-card success">

                                <div className="message-icon">

                                    <HiCheckCircle />

                                </div>

                                <div>

                                    <h3>

                                        Upload Status

                                    </h3>

                                    <p>

                                        {message}

                                    </p>

                                </div>

                            </div>

                        )
                    }


                    {/* ANALYSIS */}

                    {

                        analysis && (

                            <div className="startup-response-card">

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        marginBottom: "20px"
                                    }}
                                >

                                    <HiCpuChip
                                        style={{
                                            fontSize: "28px",
                                            color: "#2563eb"
                                        }}
                                    />

                                    <h2
                                        style={{
                                            color: "#111827"
                                        }}
                                    >

                                        AI File Analysis

                                    </h2>

                                </div>


                                <div
                                    className="markdown-content"
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

export default UploadPage;