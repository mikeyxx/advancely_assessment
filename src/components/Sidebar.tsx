"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { AiOutlineHome } from "react-icons/ai";
import { TbBox } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";
import { BsTruck, BsCart2 } from "react-icons/bs";
import { PiStackSimple, PiUserCircle, PiLockersBold } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { openMenu } = useAuthContext();
  const handleLogout = () => {
    router.push("/");
    localStorage.removeItem("user");
  };

  return (
    <div className="w-[70px]">
      <div className="flex h-full w-full">
        <div
          className={`${
            openMenu ? "bg-gray-200" : "bg-white"
          } flex flex-col justify-between w-full`}
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
          <div
            className="p-4 h-full w-full"
            title="Logout"
            onClick={handleLogout}
          >
            <IoLogOutOutline className="hover:bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
