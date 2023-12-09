import React from "react";
import Bell from "../assets/notification/bell.svg?react";
import BarChart from "../assets/notification/bar-chart.svg?react";
import Clock from "../assets/notification/clock.svg?react";
import Select from "./select";
import Checkbox from "./checkbox";

export const Notification1 = () => {
  return (
    <div className="w-[189.7px] h-[171.5px] rounded-[8.4px] notification-1-bg-gradient notification-box-shadow p-[14px]">
      <div className="flex justify-between">
        <Bell />
        <p className="text-[#19191A] text-[9.1px] font-semibold leading-[10.92px]">
          Save
        </p>
      </div>
      <p className="text-[#19191A] text-[14px] font-medium leading-[16.8px] mt-[14px]">
        We’ll be sending notifications to you here
      </p>
      <div className="mt-[15.5px] border-[#D4D4D4] border-[0.7px] rounded-[5.6px] bg-white h-[35px]"></div>
    </div>
  );
};

export const Notification2 = () => {
  return (
    <div className="w-[189.7px] h-[171.5px] rounded-[8.4px] bg-white notification-box-shadow p-[14px]">
      <div className="flex justify-between items-start">
        <BarChart />
        <Checkbox checked={true} />
      </div>
      <p className="text-[#19191A] text-[11.2px] font-medium leading-[13.44px] mt-[55.3px] mb-[14.6px]">
        Notify me when any wallets move more than
      </p>
      <Select />
    </div>
  );
};

export const Notification3 = () => {
  return (
    <div className="w-[189.7px] h-[171.5px] rounded-[8.4px] bg-white notification-box-shadow p-[14px]">
      <div className="flex justify-between items-start">
        <Clock />
        <Checkbox checked={true} />
      </div>
      <p className="text-[#19191A] text-[11.2px] font-medium leading-[13.44px] mt-[39.2px] mb-[9px]">
        Notify me when any wallets move more than
      </p>
      <Select />
      <p className="text-[#19191A] text-[11.2px] font-medium leading-[13.44px] mt-[8.4px]">
        becomes active
      </p>
    </div>
  );
};
