"use client";

import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import SubMenu from "./SubMenu";
import SuccessOrderModal from "@/utils/SuccessOrderModal";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";

function Dashboard() {
  const { openMenu } = useAuthContext();

  return (
    <div className="w-[90vw] h-[90vh] rounded-lg flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <SubMenu />
        <div
          className={`flex-1 bg-gray-100 p-4 ${
            openMenu && "hidden xl:flex flex-col"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <MdKeyboardArrowLeft className="h-6 w-6 bg-blue-800 text-white rounded-full" />

            <h1 className="font-semibold">Buyer Analytics Overview</h1>
          </div>
          <div className="bg-white p-4 w-full flex gap-4 flex-col h-[calc(100vh-220px)] rounded-md">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
              <div className="row-span-2 border p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <FiDollarSign className="bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-full text-blue-700" />
                  <select>
                    <option>Monthly</option>
                    <option>Weekly</option>
                  </select>
                </div>
              </div>

              <div className="box border p-4 rounded-lg">Box 2</div>
              <div className="box border p-4 rounded-lg">Box 1</div>
              <div className="box border p-4 rounded-lg">Box 3</div>
              <div className="box border p-4 rounded-lg">Box 4</div>
            </div>

            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 h-full">
              <div className="box border p-4 rounded-lg">Box 5</div>
              <div className="box border p-4 rounded-lg">Box 6</div>
            </div>
          </div>
        </div>
      </div>
      <SuccessOrderModal />
    </div>
  );
}

export default Dashboard;
