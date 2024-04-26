"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import { GoogleIcon } from "../../../../public/google-icon";
import { GitHubIcon } from "../../../../public/git-hub-icon";
import { FacebookIcon } from "../../../../public/facebook-icon";

interface LoginType {
  email: string;
  password: string;
}

const LoginPage: NextPage = () => {
  const { register, handleSubmit, reset } = useForm<LoginType>();

  const submit = (data: LoginType) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/",
    }).then((res) => {
      console.log(res);
    });
  };

  const githubLogin = () => {
    signIn("github", {
      redirect: true,
      callbackUrl: "/",
    }).then((res) => {
      console.log(res);
    });
  };

  const GoogleLogin = () => {
    signIn("google", {
      redirect: true,
      callbackUrl: "/",
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 mt-[200px] items-center"
        onSubmit={handleSubmit(submit)}
      >
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
          Login
        </button>
      </form>

      <div className="text-center mt-3">
        <p className="my-2 font-bold text-[20px]">
          You can also login with any Social Media
        </p>
        <div className="flex items-center gap-4 justify-center">
          <button
            type="button"
            onClick={githubLogin}
            className="py-2 px-10 bg-purple-300 rounded-md mt-2"
          >
            <GitHubIcon />
          </button>

          <button
            type="button"
            onClick={GoogleLogin}
            className="py-2 px-10 bg-purple-300 rounded-md mt-2"
          >
            <GoogleIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
