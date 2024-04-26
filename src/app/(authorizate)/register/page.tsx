"use client";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { NextPage } from "next";

interface ResType {
  name: string;
  email: string;
  password: string;
}

const RegisterPage: NextPage = () => {
  const { register, handleSubmit, reset } = useForm<ResType>();
  const router = useRouter();
  const submit = (data: ResType) => {
    axios.post("http://localhost:8080/register", data).then((res) => {
      console.log(res);

      router.push("/login");
    });
    reset();
  };
  return (
    <div>
      <form
        className="flex flex-col gap-4 mt-[200px] items-center"
        onSubmit={handleSubmit(submit)}
      >
        <input
          className="px-2 py-2 outline-none border border-black rounded-md w-[400px]"
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          className="px-2 py-2 outline-none border border-black rounded-md w-[400px]"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          className="px-2 py-2 outline-none border border-black rounded-md w-[400px]"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <button className="py-1 px-4 bg-purple-300 rounded-md" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
