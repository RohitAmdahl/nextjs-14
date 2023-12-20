"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col  justify-center items-center min-h-screen py-2 overflow-hidden">
      <h1 className="text-2xl">LoginPage </h1>
      <div className="flex flex-col">
        <div className="flex flex-col py-2 m-2 ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="flex flex-col py-2 m-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <div className="flex flex-col py-2 m-2">
          <button
            className="bg-blue-400  text-black px-2 font-bold py-1 uppercase"
            onClick={onLogin}
          >
            Log in
          </button>
        </div>
      </div>
      <Link
        className=" text-2xl font-bold uppercase hover:underline"
        href="/signup"
      >
        Sign-up page click here
      </Link>
    </div>
  );
};

export default LoginPage;
