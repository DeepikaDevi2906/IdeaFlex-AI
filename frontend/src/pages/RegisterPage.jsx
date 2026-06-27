import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import {
    HiSparkles
} from "react-icons/hi2";
import "../styles/global.css";
function RegisterPage() {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);


    const handleRegister = async () => {

        if (!name || !email || !password) return;

        try {

            setLoading(true);

            const res = await API.post(

                "/register",

                {
                    name,
                    email,
                    password
                }
            );

            console.log(res.data);

            alert("Registration Successful");

            navigate("/login");
        }

        catch (err) {

            console.log(err);

            alert("Registration failed");
        }

        finally {

            setLoading(false);
        }
    };


    return (

        <div className="modern-auth-page">

            <div className="modern-auth-card">
                <div className="modern-auth-logo">

                    <HiSparkles />

                </div>

                <h1 className="modern-auth-title">

                    Create Account

                </h1>

                <p className="modern-auth-subtitle">

                    Build your AI Startup Workspace

                </p>
                <div className="modern-auth-inputs">

                    <input

                        type="text"

                        placeholder="Enter your name"

                        value={name}

                        onChange={(e) =>
                            setName(e.target.value)
                        }

                        className="modern-auth-input"
                    />


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

                        placeholder="Create password"

                        value={password}

                        onChange={(e) =>
                            setPassword(e.target.value)
                        }

                        className="modern-auth-input"
                    />

                </div>

                <button

                    onClick={handleRegister}

                    className="modern-auth-btn"

                    disabled={loading}
                >

                    {
                        loading
                            ? "Creating Account..."
                            : "Register"
                    }

                </button>

                <p className="modern-auth-footer">

                    Already have an account?

                    <span
                        onClick={() =>
                            navigate("/login")
                        }
                    >

                        Login

                    </span>

                </p>

            </div>

        </div>
    );
}

export default RegisterPage;