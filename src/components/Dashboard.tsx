"use client";

import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="w-[90vw] h-[90vh] rounded-lg flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="flex-1 bg-gray-100">
          <p>Main content</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
