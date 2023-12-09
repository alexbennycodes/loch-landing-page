import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ChevronDown from "../assets/chevron-down.svg?react";
import Check from "../assets/check.svg?react";

const people = [
  {
    id: 1,
    name: "$500.00",
  },
  {
    id: 2,
    name: "$1,000.00",
  },
  {
    id: 3,
    name: "$2,000.00",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Select() {
  const [selected, setSelected] = useState(people[1]);

  return (
    <Listbox value={selected} onChange={setSelected} disabled>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-fit h-[19.6px] flex items-center gap-[2.8px] cursor-default rounded-[2.8px] bg-[#E5E5E680] p-[4.2px] text-left text-gray-900 shadow-sm ring-inset focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="block truncate text-[9.1px] font-medium leading-[10.92px]">
                  {selected?.name}
                </span>
              </span>
              <span className="pointer-events-none flex items-center">
                <ChevronDown />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-[2.8px] bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none p-[4.2px]"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate text-[9.1px] font-medium leading-[10.92px]"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-2"
                            )}
                          >
                            <Check width={12} height={12} />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
