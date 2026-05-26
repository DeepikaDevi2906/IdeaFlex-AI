import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import {
    HiSparkles
} from "react-icons/hi2";

function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);


    // =====================================
    // HANDLE LOGIN
    // =====================================

    const handleLogin = async () => {

        if (!email || !password) return;

        try {

            setLoading(true);

            const res = await API.post(

                "/login",

                {
                    email,
                    password
                }
            );

            console.log(res.data);

            // SAVE TOKEN

            localStorage.setItem(

                "token",

                res.data.token
            );


            // SAVE USER

            localStorage.setItem(

                "user",

                JSON.stringify(
                    res.data.user
                )
            );


            // REDIRECT

            window.location.href = "/chat";

        }

        catch (err) {

            console.log(err);

            alert("Invalid credentials");
        }

        finally {

            setLoading(false);
        }
    };


    return (

        <div className="modern-auth-page">

            <div className="modern-auth-card">


                {/* LOGO */}

                <div className="modern-auth-logo">

                    <HiSparkles />

                </div>


                {/* TITLE */}

                <h1 className="modern-auth-title">

                    Welcome Back

                </h1>

                <p className="modern-auth-subtitle">

                    Login to your AI Startup Workspace

                </p>


                {/* INPUTS */}

                <div className="modern-auth-inputs">

                    <input

                        type="email"

                        placeholder="Enter your email"

                        value={email}

                        onChange={(e) =>
                            setEmail(e.target.value)
                        }

                        className="modern-auth-input"
                    />


                    <input

                        type="password"

                        placeholder="Enter your password"

                        value={password}

                        onChange={(e) =>
                            setPassword(e.target.value)
                        }

                        className="modern-auth-input"
                    />

                </div>


                {/* BUTTON */}

                <button

                    onClick={handleLogin}

                    className="modern-auth-btn"

                    disabled={loading}
                >

                    {
                        loading
                            ? "Signing In..."
                            : "Login"
                    }

                </button>


                {/* FOOTER */}

                <p className="modern-auth-footer">

                    Don't have an account?

                    <span
                        onClick={() =>
                            navigate("/register")
                        }
                    >

                        Register

                    </span>

                </p>

            </div>

        </div>
    );
}

export default LoginPage;