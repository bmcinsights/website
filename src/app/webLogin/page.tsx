"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // State for error messages

    const onLogIn = async () => {
        try {
            setLoading(true);
            setErrorMessage(""); // Clear previous errors

            const response = await axios.post("/api/users/login", user);
            const response2 = await axios.post("/api/users/handel", user);

            console.log(response, response2);

            // Force a reload to ensure the cookies are revalidated
            window.location.reload();
        } catch (error: any) {
            console.log("Login failed", error.response?.data?.error || error.message);
            setErrorMessage(error.response?.data?.error || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="relative flex min-h-screen text-text">
            {/* Fire particles container */}
            <div className="fire-container">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="fire-particle" style={{ '--i': i } as React.CSSProperties}></div>
                ))}
            </div>

            {/* Right Side - Form */}
            <div className="w-full flex items-center justify-center relative z-10 py-10 px-6 md:p-16">
                <div className="w-full max-w-md p-8 bg-secondary bg-opacity-10 border border-secondary py-10 px-8 rounded-xl shadow-lg">
                    <h1 className="text-4xl font-bold font-tertiary text-center mb-6">
                        {loading ? <LoadingSpinner /> : "Log in"}
                    </h1>

                    {errorMessage && ( // Display error message if exists
                        <div className="bg-red-500 text-white text-center p-3 rounded mb-6">
                            {errorMessage}
                        </div>
                    )}

                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Email"
                        className="w-full p-3 mb-6 bg-secondary bg-opacity-20 text-text border border-secondary rounded-lg focus:ring-2 focus:ring-red-500"
                    />

                    <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="Password"
                        className="w-full p-3 mb-6 bg-secondary bg-opacity-20 text-text border border-secondary rounded-lg focus:ring-2 focus:ring-red-500"
                    />

                    <div className="mt-8">
                        <button
                            onClick={onLogIn}
                            disabled={buttonDisabled}
                            className="w-full py-3 bg-[#ff0000] bg-opacity-60 text-white font-bold rounded-lg hover:bg-opacity-80 cursor-pointer transition-colors duration-150 mb-4"
                        >
                            Log In
                        </button>

                        <div className="text-center">
                            <a href="/signup" className="text-text text-opacity-60 font-md text-sm hover:text-text transition-all duration-150">Don't have an account? <span className="hover:text-accent"> Sign Up </span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LoadingSpinner() {
    return (
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-red-500 border-gray-300"></div>
    );
}
