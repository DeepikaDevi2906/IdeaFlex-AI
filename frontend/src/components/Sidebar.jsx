import {

    HiHome,

    HiCpuChip,

    HiRocketLaunch,

    HiChartBar,

    HiCloudArrowUp,

    HiArrowRightOnRectangle

} from "react-icons/hi2";

import {

    Link,

    useLocation,

    useNavigate

} from "react-router-dom";

import API from "../services/api";


function Sidebar() {

    const location = useLocation();

    const navigate = useNavigate();


    // =====================================
    // LOGOUT
    // =====================================

    const handleLogout = async () => {

        try {

            const token = localStorage.getItem(
                "token"
            );

            await API.post(

                "/logout",

                {},

                {
                    headers: {

                        Authorization: `Bearer ${token}`
                    }
                }
            );
        }

        catch (err) {

            console.log(err);
        }

        finally {

            // CLEAR STORAGE

            localStorage.removeItem(
                "token"
            );

            localStorage.removeItem(
                "user"
            );

            localStorage.removeItem(
                "startup_ai_chats"
            );

            // REDIRECT

            window.location.href = "/login";
        }
    };


    return (

        <div className="sidebar">

            {/* TOP */}

            <div>

                <div className="sidebar-header">

                    <div className="logo-box">

                        AI

                    </div>

                    <div>

                        <h2 className="logo-title">

                            IdeaFlex AI

                        </h2>

                        <p className="logo-subtitle">

                            Agent Workspace

                        </p>

                    </div>

                </div>


                {/* MENU */}

                <div className="sidebar-menu">


                    {/* DASHBOARD */}

                    <Link
                        to="/dashboard"
                        className="menu-link"
                    >

                        <div
                            className={

                                location.pathname === "/dashboard"

                                    ? "menu-item active"

                                    : "menu-item"
                            }
                        >

                            <HiHome />

                            <p>

                                Dashboard

                            </p>

                        </div>

                    </Link>


                    {/* CHAT */}

                    <Link
                        to="/chat"
                        className="menu-link"
                    >

                        <div
                            className={

                                location.pathname === "/chat"

                                    ? "menu-item active"

                                    : "menu-item"
                            }
                        >

                            <HiCpuChip />

                            <p>

                                AI Chat

                            </p>

                        </div>

                    </Link>


                    {/* STARTUPS */}

                    <Link
                        to="/startup"
                        className="menu-link"
                    >

                        <div
                            className={

                                location.pathname === "/startup"

                                    ? "menu-item active"

                                    : "menu-item"
                            }
                        >

                            <HiRocketLaunch />

                            <p>

                                Startups

                            </p>

                        </div>

                    </Link>


                    {/* REPORTS */}

                    <Link
                        to="/reports"
                        className="menu-link"
                    >

                        <div
                            className={

                                location.pathname === "/reports"

                                    ? "menu-item active"

                                    : "menu-item"
                            }
                        >

                            <HiChartBar />

                            <p>

                                Reports

                            </p>

                        </div>

                    </Link>


                    {/* UPLOAD */}

                    <Link
                        to="/upload"
                        className="menu-link"
                    >

                        <div
                            className={

                                location.pathname === "/upload"

                                    ? "menu-item active"

                                    : "menu-item"
                            }
                        >

                            <HiCloudArrowUp />

                            <p>

                                Uploads

                            </p>

                        </div>

                    </Link>

                </div>

            </div>


            {/* BOTTOM */}

            <button

                className="logout-btn"

                onClick={handleLogout}
            >

                <HiArrowRightOnRectangle />

                Logout

            </button>

        </div>
    );
}

export default Sidebar;