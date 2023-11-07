"use client";

import React, { useState } from "react";
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
  const { openMenu, setSelectedItem, selectedItem } = useAuthContext();

  const handleMenuItemClick = (item: string) => {
    // Update the selected item when a menu item is clicked
    setSelectedItem(item);
  };

  const handleLogout = () => {
    router.push("/");
    localStorage.removeItem("user");
  };

  const menuItemItems = [
    {
      text: "Home",
      icon: <AiOutlineHome />,
    },
    {
      text: "Cart",
      icon: <BsCart2 />,
    },
    {
      text: "Box",
      icon: <TbBox />,
    },
    {
      text: "Files",
      icon: <FiFileText />,
    },
    {
      text: "Buyer Analytics Overview",
      icon: <PiLockersBold />,
    },
    {
      text: "Truck",
      icon: <BsTruck />,
    },
    {
      text: "Stack",
      icon: <PiStackSimple />,
    },
    {
      text: "User",
      icon: <PiUserCircle />,
    },
  ];

  return (
    <div className="w-[70px]">
      <div className="flex h-full w-full">
        <div
          className={`${
            openMenu ? "bg-gray-200" : "bg-white"
          } flex flex-col justify-between w-full`}
        >
          <div className="p-4 flex flex-col gap-4">
            {menuItemItems.map((menuItem, index) => (
              <div
                key={index}
                onClick={() => handleMenuItemClick(menuItem.text)}
                className={`${
                  pathname === "/dashboard" && selectedItem === menuItem.text
                    ? "bg-blue-200"
                    : ""
                } hover:bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-lg`}
              >
                {menuItem.icon}
              </div>
            ))}
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
