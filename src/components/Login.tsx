"use client";

import { useAuthContext } from "@/context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const { user, setUser } = useAuthContext();
  const router = useRouter();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // You can add your login logic here
    // alert(`Welcome, ${username}!`);
    localStorage.setItem("user", username);
    setUser(username);

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-md w-[400px]">
        <h1 className="text-xl font-semibold mb-4">
          Enter your username to go to dashboard
        </h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="text-gray-600 text-sm block mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
