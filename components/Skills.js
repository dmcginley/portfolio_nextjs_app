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
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
const skills_icons = { color: "#475569", fontSize: "3.6rem" };

// import { RiLinkedinFill } from "react-icons/ri";

// import mypic from "../public/static/images/project_1.png";
import { skills } from ".././constants/skills";

// import { projects } from "../constants/constants";

const Skills = () => (
  <section className="skills-section px-4 pt-10 md:p-8 lg:px-20">
    <div
      id="skills"
      className="text-4xl lg:text-6xl px-6 py-8 md:pt-8 md:pb-10 lg:pt-20 lg:pb-16 font-semibold text-darkBlue md:items-center text-center md:text-left"
    >
      <h3>
        Skills
        <span className="text-blue-500">_</span>Technologies
        <span className="text-blue-500">/</span>
      </h3>
    </div>
    <div>
      <p className="text-center text-lg md:text-xl m-auto max-w-3xl pb-6">
        Here are some of the technoligies I've used in my projects, including
        this portfolio websit which was built using <strong>Next.js</strong>
      </p>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-4 justify-items-center py-4">
      {/* <div className=" text-center shadow-lg py-10 px-14 rounded-md bg-slate-100">
        <SiCss3 style={skills_icons} />
        <h4>Django</h4>
      </div> */}
      <div className="py-4">
        <SiHtml5 style={skills_icons} />
      </div>
      <div className="py-4">
        <SiCss3 style={skills_icons} />
      </div>
      <div className="py-4">
        <SiJavascript style={skills_icons} />
      </div>
      <div className="py-4">
        <SiPython style={skills_icons} />
      </div>
      <div className="py-4">
        <SiDjango style={skills_icons} />
      </div>
      <div className="py-4">
        <SiBootstrap style={skills_icons} />
      </div>
      <div className="py-4">
        <SiTailwindcss style={skills_icons} />
      </div>
      <div className="py-4">
        <SiFigma style={skills_icons} />
      </div>
      <div className="py-4">
        <DiPhotoshop style={skills_icons} />
      </div>
      <div className="py-4">
        <SiGimp style={skills_icons} />
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
