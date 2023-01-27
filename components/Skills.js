import React from "react";
// import Image from "next/image";

import { SiDjango, SiPython, SiJavascript } from "react-icons/si";
// import { RiLinkedinFill } from "react-icons/ri";

// import mypic from "../public/static/images/project_1.png";

// import { projects } from "../constants/constants";

const Skills = () => (
  <section className="px-4 pt-10 md:p-8 lg:px-20">
    <div
      id="skills"
      className="text-4xl lg:text-6xl px-6 py-8 md:pt-8 md:pb-10 lg:pt-20 lg:pb-16 font-semibold text-darkBlue md:items-center text-center md:text-left"
    >
      <h3>
        Skills<span className="text-blue-500">/</span>Technologies Used
      </h3>
    </div>

    <div className="card-section  m-auto md:flex md:justify-center gap-6">
      <div className="block rounded-lg shadow-lg bg-white md:max-w-sm text-center mb-6 flex-1">
        <div className="bg-slate-400 p-3 rounded-t">
          <SiDjango size={50} />
        </div>
        <h3 className=" text-xl py-3 px-6 border-gray-300">
          Lorem ipsum dolor
        </h3>
        <div className="p-6">
          <p className="text-gray-700 text-base mb-4">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
          2 days ago
        </div>
      </div>
      <div className="block rounded-lg shadow-lg bg-white md:max-w-sm text-center mb-6 flex-1">
        <div className="bg-orange-400 p-3 rounded-t">
          <SiPython size={50} />
        </div>
        <h3 className=" text-xl py-3 px-6 border-gray-300">
          Lorem ipsum dolor
        </h3>
        <div className="p-6">
          <p className="text-gray-700 text-base mb-4">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
          2 days ago
        </div>
      </div>
      <div className="block rounded-lg shadow-lg bg-white md:max-w-sm text-center mb-6 flex-1">
        <div className="bg-violet-400 p-3 rounded-t">
          <SiJavascript size={50} />
        </div>
        <h3 className=" text-lg py-3 px-4 pb-0 border-gray-300">
          Lorem ipsum dolor
        </h3>
        <div className="p-4">
          <p className="text-gray-700 text-base mb-4">
            With supporting text bedf additional content.
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
          2 days ago
        </div>
      </div>
    </div>
  </section>
);
export default Skills;
