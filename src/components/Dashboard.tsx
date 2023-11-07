"use client";

import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import SubMenu from "./SubMenu";
import SuccessOrderModal from "@/utils/SuccessOrderModal";

function Dashboard() {
  const { openMenu } = useAuthContext();

  return (
    <div className="w-[90vw] h-[90vh] rounded-lg flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex h-full w-full">
        <Sidebar />
        <SubMenu />
        <div className={`flex-1 bg-gray-100 ${openMenu && "hidden xl:flex"}`}>
          <p>Main content</p>
        </div>
      </div>
      <SuccessOrderModal />
    </div>
  );
}

export default Dashboard;
