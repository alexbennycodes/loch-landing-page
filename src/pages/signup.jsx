import React from "react";
import { UserAuthForm } from "../components/user-auth-form";

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex bg-black overflow-hidden">
        <div className="signup-bg-gradient absolute inset-0 -left-[384px] -bottom-[120px] -top-[114px] right-[490px] h-[1257.842px] w-[92.64vw]" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Acme Inc
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8 lg:w-[44.44%] lg:min-w-[640px] mx-auto flex w-full flex-col items-center justify-center">
        <div className="w-[350px] max-w-[365px]">
          <div className="w-[345px]">
            <h1 className="font-medium text-[#b0b1b3] text-[39px] tracking-[0] leading-[46.8px] mb-[32px]">
              Sign up for <br />
              exclusive access.
            </h1>
            <UserAuthForm />
          </div>
          <p className="font-semibold text-[#181919] text-[16px] text-center tracking-[0] leading-[19.2px] whitespace-nowrap py-[18px] mt-[24px]">
            You’ll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </div>
  );
}
