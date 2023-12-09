"use client";

import React, { useState } from "react";

import { Button } from "./button";
import { Input } from "./input";

export function UserAuthForm({ ...props }) {
  const [error, setError] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    console.log(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }
    setError(null);
    window.location.href = "https://app.loch.one/welcome";
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col">
        <div className="h-[32px] flex items-end">
          {error && (
            <p className=" text-red-500 text-sm mb-[5px] font-medium">
              * Enter a valid email address
            </p>
          )}
        </div>

        <Input
          className={`w-[full] px-[24px] py-[20px] relative bg-white rounded-[8px] border border-solid border-[#E5E5E6] mt-[-1.00px] font-medium text-grey-200 text-base tracking-[0] leading-[120%] placeholder:text-base placeholder:color-[#CACBCC]  focus-visible:outline-${
            error ? "red-500" : "black"
          } hover:ring-2 hover:ring-${
            error ? "red-500" : "black"
          } focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "ring-2 ring-red-500" : ""
          }`}
          id="email"
          placeholder="Your email address"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          onChange={() => setError(null)}
        />

        <Button className="px-[28px] py-[18px] rounded-[8px] bg-[#19191A] text-white text-base leading-[120%] font-semibold w-full mt-[24px]">
          Get started
        </Button>
      </div>
    </form>
  );
}
