import Sidebar from "../components/Sidebar";

import {

    HiSparkles,

    HiRocketLaunch,

    HiChartBar,

    HiCpuChip,

    HiDocumentText,

    HiLightBulb

} from "react-icons/hi2";

import {

    useNavigate

} from "react-router-dom";


function Dashboard() {

    const navigate = useNavigate();


    const features = [

    {
        icon: <HiLightBulb />,
        title: "Startup Strategy",
        description:
            "Generate AI-driven startup strategies, business positioning, and growth direction."
    },

    {
        icon: <HiChartBar />,
        title: "Market Intelligence",
        description:
            "Analyze competitors, market demand, scalability, and industry opportunities."
    },

    {
        icon: <HiCpuChip />,
        title: "Multi-Agent AI",
        description:
            "Autonomous AI agents collaborate to evaluate and optimize startup ideas."
    },

    {
        icon: <HiDocumentText />,
        title: "AI Reports",
        description:
            "Generate and store detailed investor-style startup evaluation reports."
    },

    {
        icon: <HiSparkles />,
        title: "Startup Validation",
        description:
            "Validate startup feasibility, monetization potential, and investor attractiveness."
    },

    {
        icon: <HiRocketLaunch />,
        title: "Growth Roadmaps",
        description:
            "Create scalable MVP plans, go-to-market strategy, and long-term growth roadmaps."
    }
];

    return (

        <div className="page">

            <div className="dashboard-layout">


                {/* SIDEBAR */}

                <Sidebar />


                {/* MAIN */}

                <div className="main-content modern-dashboard-content">


                    {/* HERO */}

                    <div className="modern-dashboard-hero">

                        <div className="hero-badge">

                            <HiSparkles />

                            AI-Powered Startup Operating System

                        </div>


                        <h1 className="modern-dashboard-title">

                            Transform Startup Ideas
                            Into Intelligent Businesses

                        </h1>


                        <p className="modern-dashboard-subtitle">

                            Analyze startup ideas using autonomous AI agents,
                            generate investor-grade reports,
                            perform market research,
                            competitor analysis,
                            and build scalable startup strategies.

                        </p>


                        {/* CTA */}

                        <div className="modern-dashboard-actions">

                            <button

                                className="hero-primary-btn"

                                onClick={() =>
                                    navigate("/startup")
                                }
                            >

                                <HiRocketLaunch />

                                Analyze Startup

                            </button>

                        </div>

                    </div>


                    {/* FEATURE GRID */}

                    <div className="modern-feature-grid">

                        {

                            features.map((item, index) => (

                                <div

                                    className="modern-feature-card"

                                    key={index}
                                >

                                    <div className="modern-feature-icon">

                                        {item.icon}

                                    </div>


                                    <h3>

                                        {item.title}

                                    </h3>


                                    <p>

                                        {item.description}

                                    </p>

                                </div>

                            ))
                        }

                    </div>


                    {/* BOTTOM SECTION */}

                    <div className="dashboard-bottom-banner">

                        <div>

                            <h2>

                                Build Smarter Startups with AI

                            </h2>

                            <p>

                                Generate startup evaluations,
                                investor insights,
                                financial strategies,
                                MVP roadmaps,
                                and AI-powered business intelligence.

                            </p>

                        </div>


                        <button

                            className="dashboard-banner-btn"

                            onClick={() =>
                                navigate("/upload")
                            }
                        >

                            Upload Startup Docs

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;