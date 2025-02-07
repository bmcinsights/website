"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 bg-secondary bg-opacity-10 border border-secondary rounded-xl shadow-2xl">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-accent mb-2 font-tertiary">
              Create Account
            </h1>
            <p className="text-gray-400 text-sm">Join our community today</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="text-sm font-medium text-accent block mb-2">
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
                className="w-full p-3 bg-secondary bg-opacity-20 border border-secondary rounded-lg focus:ring-2 focus:ring-blue-500 text-text"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-accent block mb-2">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
                className="w-full p-3 bg-secondary bg-opacity-20 border border-secondary rounded-lg focus:ring-2 focus:ring-blue-500 text-text"
                placeholder="name@britishmodelcollege.edu.np"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-accent block mb-2">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                className="w-full p-3 bg-secondary bg-opacity-20 border border-secondary rounded-lg focus:ring-2 focus:ring-blue-500 text-text"
                placeholder="••••••••"
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm p-2 bg-red-500/10 rounded">
                {errorMessage}
              </div>
            )}

            <button
              onClick={onSignup}
              disabled={buttonDisabled || loading}
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-opacity-60 font-bold rounded-lg transition-colors duration-200 disabled:bg-text disabled:bg-opacity-30"
            >
              {loading ? <LoadingSpinner /> : "Sign Up"}
            </button>
          </form>

          <div className="text-center">
            <Link
              href="/webLogin"
              className="text-sm text-text text-opacity-60 hover:text-text transition-colors duration-200"
            >
              Already have an account? Sign in
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
