"use client";

import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import SubMenu from "./SubMenu";
import SuccessOrderModal from "@/utils/SuccessOrderModal";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { RiPriceTagFill } from "react-icons/ri";

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
          <div className="bg-white p-4 w-full flex gap-4 flex-col h-[calc(100vh-220px)] rounded-md overflow-y-scroll">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
              <div className="row-span-2 border p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <FiDollarSign className="bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-full text-blue-700" />
                  <select className="border-0 outline-none shadow-md rounded">
                    <option className="text-xs">Monthly</option>
                    <option className="text-xs">Weekly</option>
                  </select>
                </div>

                <div className="mt-4">
                  <p className="uppercase text-gray-400 text-xs">Total Spend</p>

                  <div className="flex items-center gap-4">
                    <p className="text-xl">$12,500</p>
                    <div className="text-xs text-green-600 flex items-center gap-2">
                      <BiSolidUpArrow />
                      <p>$1350</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box border p-4 rounded-lg">
                <BsTruck className="bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-full text-blue-700" />
                <div className="mt-4">
                  <p className="uppercase text-gray-400 text-xs">
                    Supplier Count
                  </p>

                  <div className="flex items-center gap-4">
                    <p className="text-xl">4525</p>
                    <div className="text-xs text-red-600 flex items-center gap-2">
                      <BiSolidDownArrow />
                      <p>12% less order</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box border p-4 rounded-lg">
                <PiShoppingBagOpenFill className="bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-full text-blue-700" />
                <div className="mt-4">
                  <p className="uppercase text-gray-400 text-xs">
                    Purchase Order
                  </p>

                  <div className="flex items-center gap-4">
                    <p className="text-xl">1555</p>
                    <div className="text-xs text-green-600 flex items-center gap-2">
                      <BiSolidUpArrow />
                      <p>12% more order</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box border p-4 rounded-lg">
                <FaFileInvoiceDollar className="bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-full text-blue-700" />
                <div className="mt-4">
                  <p className="uppercase text-gray-400 text-xs">
                    Invoice count
                  </p>

                  <p className="text-xl">4525</p>
                </div>
              </div>
              <div className="box border p-4 rounded-lg">
                <PiShoppingBagOpenFill className="bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-full text-blue-700" />
                <div className="mt-4">
                  <p className="uppercase text-gray-400 text-xs">
                    PO/Invoice Accuracy
                  </p>

                  <p className="text-xl">2578</p>
                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 h-full">
              <div className="box border p-4 rounded-lg">
                <AiFillBank className="bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-full text-blue-700" />
                <div className="mt-4">
                  <p className="uppercase text-gray-400 text-xs">
                    Spend by legal entity
                  </p>

                  <p className="text-xl">50457</p>
                </div>
              </div>
              <div className="box border p-4 rounded-lg">
                <RiPriceTagFill className="bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-full text-blue-700" />
                <div className="mt-4">
                  <div className="flex items-center gap-4">
                    <p className="uppercase text-gray-400 text-xs">
                      Purchase Order
                    </p>
                    <small>08-11-19 - 08-12-19</small>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-xl">54,525</p>
                    <div className="text-xs text-green-600 flex items-center gap-2">
                      <BiSolidUpArrow />
                      <p>42% increase price</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessOrderModal />
    </div>
  );
}

export default Dashboard;
