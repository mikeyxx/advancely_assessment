"use client";

import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

function Page() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      redirect("/");
    }
  }, []);
  return (
    <section className="flex justify-center items-center h-screen">
      <Dashboard />
    </section>
  );
}

export default Page;
