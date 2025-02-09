"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const validateInput = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Ensures email ends with @gmail.com
    if (!emailRegex.test(user.email)) {
      setErrorMessage("Email must be a valid @gmail.com address.");
      return false;
    }
    if (user.password.length <= 4) {
      setErrorMessage("Password must be greater than 4 characters.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const onSignup = async () => {
    if (!validateInput()) return; // Prevent API call if validation fails

    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);

      if (response.status === 200 && response.data.success) {
        console.log("Signup successful:", response.data);
        router.push("/verifycode"); // Navigate to the verify code page
      } else {
        console.error("Unexpected response:", response.data);
        alert("Signup failed. Please check your details and try again.");
      }
    } catch (error: any) {
      console.error("Signup error:", error?.response?.data || error.message);
      alert("An error occurred during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
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
      <div className="w-full flex items-center justify-center relative z-5 py-10 px-6 md:p-16">
        <div className="w-full max-w-md p-8 bg-secondary bg-opacity-10 border border-secondary py-10 px-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold font-tertiary text-center mb-6">
            {loading ? <LoadingSpinner /> : "Create Account"}
          </h1>

          {errorMessage && (
            <div className="bg-red-500 text-white text-center p-3 rounded mb-6">
              {errorMessage}
            </div>
          )}

          <form className="space-y-6">
            <div>
              <label className="text-sm font-medium text-text block mb-2">
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
                className="w-full p-3 bg-secondary bg-opacity-20 border border-secondary rounded-lg focus:ring-2 focus:ring-primary text-text"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-text block mb-2">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
                className="w-full p-3 bg-secondary bg-opacity-20 border border-secondary rounded-lg focus:ring-2 focus:ring-primary text-text"
                placeholder="name@britishmodelcollege.edu.np"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-text block mb-2">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                className="w-full p-3 bg-secondary bg-opacity-20 border border-secondary rounded-lg focus:ring-2 focus:ring-primary text-text"
                placeholder="••••••••"
              />
            </div>

            <button
              onClick={onSignup}
              disabled={buttonDisabled || loading}
              className="w-full py-3 bg-[#ff0000] bg-opacity-60 hover:bg-opacity-80 text-white rounded-lg font-bold transition-colors duration-150"
            >
              {loading ? <LoadingSpinner /> : "Sign Up"}
            </button>
          </form>

          <div className="text-center mt-6">
            <Link
              href="/webLogin"
              className="text-text text-opacity-60 font-md text-sm hover:text-text transition-all duration-150"
            >
              Already have an account? <span className="hover:text-accent">Sign in</span>
            </Link>
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
