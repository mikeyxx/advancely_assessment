import React, { useState } from "react";
import {
  FiFileText,
  FiArrowUpRight,
  FiCreditCard,
  FiUsers,
} from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { TbBox } from "react-icons/tb";
import { FiDollarSign } from "react-icons/fi";
import SuccessOrderModal from "@/utils/SuccessOrderModal";
import { useAuthContext } from "@/context/AuthContext";

function SubMenu() {
  const { openMenu, setIsModalOpen } = useAuthContext();

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      className={`flex flex-col gap-4 bg-white ${
        openMenu ? "w-full xl:w-[280px] p-4 opacity-100" : "w-0 opacity-0"
      } h-full transition-all duration-300`}
    >
      <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600">
        <FiFileText />
        <span>Order Summary</span>
      </div>
      <div
        className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600"
        onClick={openModal}
      >
        <PiShoppingBagOpenFill />
        <span>Create PO</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600">
        <TbBox />
        <span>Add New Vendor</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600">
        <FiDollarSign />
        <span>Account Payable</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600">
        <TbBox />
        <span>Vendors</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600">
        <BsCheck2Circle />
        <span>Order Approvals</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600">
        <FiArrowUpRight />
        <span>Sales Orders</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600">
        <FiCreditCard />
        <span>Account Receivable</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600">
        <FiUsers />
        <span>Clients</span>
      </div>
    </div>
  );
}

export default SubMenu;
