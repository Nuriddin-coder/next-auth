"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col gap-4">
        
        <div className="flex flex-col">
          <Link
            className="px-10 py-1 bg-slate-400 text-white hover:bg-slate-300 "
            href="/profile/infos"
          >
            Infos
          </Link>

          <Link
            className="px-10 py-1 bg-slate-400 text-white hover:bg-slate-300 "
            href="/profile/statistic"
          >
            Statistic
          </Link>
        </div>
        <div>
          <button
            onClick={() => signOut()}
            className="px-4 py-1 bg-slate-400 text-white rounded-md"
          >
            LogOut
          </button>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default ProfileLayout;
