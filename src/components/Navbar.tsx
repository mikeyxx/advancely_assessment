"use client";

import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const { user, openMenu, setOpenMenu } = useAuthContext();

  return (
    <nav className="flex w-full">
      <div
        className={`bg-gray-200 w-[70px] p-4 ${openMenu ? "block" : "hidden"}`}
        onClick={() => setOpenMenu(false)}
      >
        <RxHamburgerMenu className="bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-full" />
      </div>
      <div className="flex-1">
        <div className="p-4 border-b-2 bg-white flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
            <RxHamburgerMenu
              className="bg-blue-200 h-8 w-8 p-2 cursor-pointer rounded-full"
              onClick={() => setOpenMenu(true)}
            />

            <h2 className="font-bold">Beximco</h2>
          </div>
          <h2 className="font-bold">Welcome, {user}</h2>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
