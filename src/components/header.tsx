"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

export const Header = () => {
  const data = useSession();
  console.log(data);
  return (
    <div className="bg-slate-500 text-white py-4">
      <div className="container flex items-center justify-between">
        <Link
          className="py-1 px-4 bg-slate-400 rounded-lg hover:shadow-md hover:shadow-white duration-500"
          href="/"
        >
          Home
        </Link>
        <div>
          {data.status == "unauthenticated" ? (
            <div className="flex items-center gap-4">
              <Link
                className="py-1 px-4 bg-slate-400 rounded-lg hover:shadow-md hover:shadow-white duration-500 focus:shadow-lg focus:shadow-white"
                href="/login"
              >
                Login
              </Link>
              <p>/</p>
              <Link
                className="py-1 px-4 bg-slate-400 rounded-lg hover:shadow-md hover:shadow-white duration-500 focus:shadow-lg focus:shadow-white"
                href="/register"
              >
                Register
              </Link>
            </div>
          ) : (
            <Link
              className="py-1 px-4 bg-slate-400 rounded-lg flex items-center gap-2 hover:shadow-md hover:shadow-white duration-500 focus:shadow-lg focus:shadow-white"
              href="/profile"
            >
              {data.data?.user?.picture ? (
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={data.data?.user?.picture}
                  alt="img"
                />
              ) : (
                ""
              )}

              {data.data?.user?.user?.name}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
