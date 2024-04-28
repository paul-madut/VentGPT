"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="container flex flex-col items-center w-48 rounded-xl  border-4 border-transparent hover:bg-[#2f2f2f] active:bg-gray-800 duration-500">
      <button
        onClick={() => setIsActive((isActive) => !isActive)}
        className=" p-2 text-white  text-2xl font-bold tracking-wider"
      >
        {" "}
        VentGpt
        {isActive ? (
          <FontAwesomeIcon className="text-white px-4" icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon className="text-white px-4" icon={faCaretDown} />
        )}
      {isActive && (
        <div className="text-white bg-[#2f2f2f] fixed left-auto rounded-lg mt-8 w-96 border-[1px] border-gray-800 ">
          <br />
          <div>
            <p className=" text-sm text-left pl-4 py-2 text-[#a8a8a8]"> Therapist Model</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      )}
      </button>
    </div>
  );
}

export default Dropdown;
