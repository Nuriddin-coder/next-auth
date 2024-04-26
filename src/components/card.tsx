"use client"
import React from "react";

export const Card = (data: any) => {
  return (
    <div className="w-[300px] flex flex-col justify-between h-auto border border-black shadow-lg rounded-md">
      <h1 className="text-[18px] text-center bg-slate-400 text-white w-[150px] mx-auto my-5 py-1 rounded-md">{data.name.common}</h1>
      <img className="rounded-md w-full h-[180px]" src={data.flags.png} alt="img" />
    </div>
  );
};
