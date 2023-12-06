"use client";

import * as React from "react";

import { Button } from "./button";
import { Input } from "./input";

export function UserAuthForm({ ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={"grid gap-6"} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Input
              className="w-[340px] px-[24px] py-[20px] relative bg-white rounded-[8px] border border-solid border-grey-100 mt-[-1.00px] font-medium text-grey-200 text-base tracking-[0] leading-[120%] whitespace-nowrap placeholder:text-base placeholder:color-[#CACBCC]"
              id="email"
              placeholder="Your email address"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <Button
            className="px-[28px] py-[18px] rounded-[8px] bg-[#19191A] text-white text-base leading-[120%] font-semibold mt-[24px]"
            disabled={isLoading}
          >
            Get started
          </Button>
        </div>
      </form>
    </div>
  );
}
