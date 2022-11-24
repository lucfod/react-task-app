import React, { useContext, useState } from "react";
import { BiMenu, BiSearchAlt } from "react-icons/bi";
import { TaskContext } from "../context/TaskContext";

function Header() {
  const { setIsOpen, setInputSearch } = useContext(TaskContext);

  return (
    <header className="flex border-b border-gray-200 px-8 z-30 py-4 shadow-sm bg-mkt-500">
      <div className="flex items-center justify-left">
        <a href="#" className="text-2xl font-semibold text-purple-600">
          TaskApp
        </a>
      </div>
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-gray-800">
        {/* <!-- Search input --> */}
        <div className="flex w-full justify-center">
          <div className="relative w-full max-w-xl">
            <span className="absolute text-purple-600 inset-y-0 flex items-center pl-2">
              <BiSearchAlt className="w-4 h-4" aria-hidden="true" />
            </span>
            <input
              type="input"
              className="border-2 rounded-md w-full py-2 pl-8 text-sm focus:outline-none focus:border-purple-600 "
              placeholder="Search for tasks"
              aria-label="Search"
              onChange={(e) => {
                setInputSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-right text-white">
        <ul className="flex items-center justify-center flex-shrink-0 space-x-6">
          <li>
            {/* <!-- Profile Sidebar --> */}
            <div className="relative">
              <button
                className="cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <span className="mr-2" aria-hidden="true">
                  +
                </span>
                Agregar Tarea
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
