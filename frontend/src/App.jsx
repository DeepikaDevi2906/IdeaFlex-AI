import React from "react";
import {

    BrowserRouter,

    Routes,

    Route,

    Navigate

} from "react-router-dom";

import { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard";

import ChatPage from "./pages/ChatPage";

import UploadPage from "./pages/UploadPage";

import StartupAnalysis from "./pages/StartupAnalysis";

import ReportsPage from "./pages/ReportsPage";

import StartupPage from "./pages/StartupPage";

import LoginPage from "./pages/LoginPage";

import RegisterPage from "./pages/RegisterPage";


function App() {

    // ===================================
    // AUTH STATE
    // ===================================

    const [isAuthenticated, setIsAuthenticated] = useState(false);


    // ===================================
    // CHECK TOKEN
    // ===================================

    useEffect(() => {

        const token = localStorage.getItem(
            "token"
        );

        setIsAuthenticated(!!token);

    }, []);


    return (

        <BrowserRouter>

            <Routes>


                {/* ROOT */}

                <Route

                    path="/"

                    element={

                        isAuthenticated

                            ? <Dashboard />

                            : <Navigate to="/login" />
                    }
                />


                {/* LOGIN */}

                <Route

                    path="/login"

                    element={

                        isAuthenticated

                            ? <Navigate to="/" />

                            : <LoginPage />
                    }
                />


                {/* REGISTER */}

                <Route

                    path="/register"

                    element={

                        isAuthenticated

                            ? <Navigate to="/" />

                            : <RegisterPage />
                    }
                />


                {/* DASHBOARD */}

                <Route

                    path="/dashboard"

                    element={

                        isAuthenticated

                            ? <Dashboard />

                            : <Navigate to="/login" />
                    }
                />


                {/* CHAT */}

                <Route

                    path="/chat"

                    element={

                        isAuthenticated

                            ? <ChatPage />

                            : <Navigate to="/login" />
                    }
                />


                {/* UPLOAD */}

                <Route

                    path="/upload"

                    element={

                        isAuthenticated

                            ? <UploadPage />

                            : <Navigate to="/login" />
                    }
                />


                {/* STARTUP ANALYSIS */}

                <Route

                    path="/startup-analysis"

                    element={

                        isAuthenticated

                            ? <StartupAnalysis />

                            : <Navigate to="/login" />
                    }
                />


                {/* STARTUP */}

                <Route

                    path="/startup"

                    element={

                        isAuthenticated

                            ? <StartupPage />

                            : <Navigate to="/login" />
                    }
                />


                {/* REPORTS */}

                <Route

                    path="/reports"

                    element={

                        isAuthenticated

                            ? <ReportsPage />

                            : <Navigate to="/login" />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;