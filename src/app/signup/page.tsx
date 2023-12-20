"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <>
      <div className="flex flex-col  justify-center items-center min-h-screen py-2 overflow-hidden">
        <h1 className="text-2xl">Sign up </h1>
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div className="flex flex-col py-2 m-2">
            <button
              className="bg-blue-400 text-black font-bold  px-2 py-1"
              onClick={onSignup}
            >
              Sign up
            </button>
          </div>
        </div>
        <Link
          className=" text-2xl font-bold uppercase hover:underline"
          href="/login"
        >
          {" "}
          Login page click here
        </Link>
      </div>
    </>
  );
};

export default Signup;
