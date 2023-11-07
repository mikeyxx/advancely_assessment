"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { AiOutlineHome } from "react-icons/ai";
import { TbBox } from "react-icons/tb";
import {
  FiFileText,
  FiArrowUpRight,
  FiCreditCard,
  FiUsers,
} from "react-icons/fi";
import { BsTruck, BsCheck2Circle, BsCart2 } from "react-icons/bs";
import {
  PiStackSimple,
  PiUserCircle,
  PiLockersBold,
  PiShoppingBagOpenFill,
} from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { FiDollarSign } from "react-icons/fi";
import SuccessOrderModal from "@/utils/SuccessOrderModal";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { openMenu } = useAuthContext();
  const handleLogout = () => {
    router.push("/");
    localStorage.removeItem("user");
  };
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${
        openMenu ? "w-[350px]" : "w-[70px]"
      } h-full transition-all duration-300 `}
    >
      <div className="flex h-full w-full">
        <div
          className={`${
            openMenu ? "bg-gray-200" : "bg-white"
          } flex flex-col justify-between`}
        >
          <div className="p-4 flex flex-col gap-4">
            <AiOutlineHome className="hover:bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-lg" />

            <BsCart2 className="hover:bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-lg" />

            <TbBox className="hover:bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-lg" />

            <FiFileText className="hover:bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-lg" />

            <PiLockersBold
              className={`hover:bg-blue-200 ${
                pathname === "/dashboard" && "bg-blue-200"
              } h-8 w-8 p-2 cursor-pointer rounded-lg`}
            />

            <BsTruck className="hover:bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-lg" />
            <PiStackSimple className="hover:bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-lg" />
            <PiUserCircle className="hover:bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-lg" />
          </div>
          <div className="p-4 h-full" title="Logout" onClick={handleLogout}>
            <IoLogOutOutline className="hover:bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-lg" />
          </div>
        </div>
        <div
          className={`bg-white p-4 w-full flex flex-col gap-4 ${
            openMenu ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600">
            <FiFileText />
            <span>Order Summary</span>
          </div>
          <div
            className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm hover:text-blue-600"
            onClick={() => setOpen(true)}
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
      </div>
    </div>
  );
}

export default Sidebar;
