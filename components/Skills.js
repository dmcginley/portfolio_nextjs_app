import React from "react";
// import Image from "next/image";

import {
  SiDjango,
  SiPython,
  SiJavascript,
  SiFigma,
  SiGimp,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiGithub,
  SiBlender,
  SiInkscape,
  SiJira,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
const skills_icons = { fontSize: "3.6rem" };

import { skills } from ".././constants/skills";

const Skills = () => (
  <section className="skills-section md:p-8 dark:bg-darkBg">
    <div
      // id="skills"
      className="text-4xl lg:text-6xl px-6 py-8 md:pt-8 md:pb-10 lg:pt-20 lg:pb-16 font-semibold text-darkBlue dark:text-blue-500 md:items-center text-center md:text-left"
    >
      <h3 id="lin2">
        Skills <span className="text-blue-500 dark:text-blue-300">&</span>{" "}
        Technologies
        <span className="text-blue-500 dark:text-blue-300">/</span>
      </h3>
    </div>
    <div>
      <p className="text-gray-600 dark:text-gray-400  text-center text-lg md:text-xl m-auto max-w-3xl">
        ...and some of the technology I've used in my projects, including this
        portfolio website which was built using <strong>Next.js</strong>
      </p>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 lg:w-4/5 m-auto gap-4 justify-items-center py-14">
      {/* <div className=" text-center shadow-lg py-10 px-14 rounded-md bg-slate-100">
        <SiCss3 style={skills_icons} />
        <h4>Django</h4>
      </div> */}
      <div className="subtitle w-full pb-4">
        <h3 className="text-4xl font-semibold text-center text-darkBlue dark:text-blue-500 md:text-left md:pl-6 lg:pl-4 xl:pl-8 2xl:pl-12">Dev<span className="text-blue-500 dark:text-blue-300">/</span></h3>
      </div>
      <div className="py-4">
        <SiHtml5
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiCss3
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiJavascript
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiPython
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiDjango
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiBootstrap
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiTailwindcss
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiPostgresql

          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiGithub

          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
    </div>


    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 lg:w-4/5 m-auto gap-4 justify-items-center py-14">
      <div className="subtitle w-full pb-4">
        <h3 className="text-4xl font-semibold text-center text-darkBlue dark:text-blue-500 md:text-left md:pl-6 lg:pl-4 xl:pl-8 2xl:pl-12">UX & UI<span className="text-blue-500 dark:text-blue-300">/</span></h3>
      </div>
      <div className="py-4 text-center">
        <SiJira
          style={skills_icons}
          className="m-auto fill-slate-700 dark:fill-slate-400"
        />
        <div className="pt-2">
          {/* <p>HTML5</p>
          <p>semantic markup</p> */}
        </div>

      </div>
      <div className="py-4">
        <SiFigma
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <DiPhotoshop
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiGimp
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiInkscape
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
      <div className="py-4">
        <SiBlender
          style={skills_icons}
          className=" fill-slate-700 dark:fill-slate-400"
        />
      </div>
    </div>

    {/* <div>
      {skills.map(({ icon }) => (
        <div></div>
      ))}
    </div> */}
  </section>
);
export default Skills;
