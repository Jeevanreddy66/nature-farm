"use client";

import { FC } from "react";

// Lucide React Icon Imports
import { AlignJustify, Bell, Sun, User } from "lucide-react";

export const Navbar: FC = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed top-0 w-full left-60 pr-[20rem]">
        {/* Hamburger Icon */}
        <button>
          <AlignJustify />
        </button>

        {/* Utility Icons - mode, notification, avatar */}
        <div className="flex space-x-3">
          <button>
            <Sun />
          </button>

          <button>
            <Bell />
          </button>

          <button>
            <User />
          </button>
        </div>
      </div>
    </>
  );
};
