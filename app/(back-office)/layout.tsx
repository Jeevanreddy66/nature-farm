import React, { ReactNode } from "react";

// Normal Imports
import { Sidebar } from "@/components/backoffice/sidebar";
import { Navbar } from "@/components/backoffice/navbar";

const BackOfficeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Body Layout */}
        <div className="w-full">
          {/* Header */}
          <Navbar />

          {/* Main Children Content */}
          <main className="ml-60 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default BackOfficeLayout;
