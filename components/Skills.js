import React from "react";
// import Image from "next/image";

import { icons_dev1, icons_dev2 } from "../constants/skills";
const skills_icons = { fontSize: "3.6rem" };

const Skills = () => {
  return (
    <>
      <section className="skills-section md:p-8 dark:bg-darkBg">
        <div
          className="text-4xl lg:text-6xl px-6 py-8 md:pt-8 md:pb-10 lg:pt-20 lg:pb-16 font-semibold text-darkBlue dark:text-blue-500 md:items-center text-center md:text-left"
        >
          <h3 id="lin2">
            Skills<span className="text-blue-500 dark:text-blue-300"> & </span>
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
          <div className="subtitle w-full pb-4">
            <h3 className="text-4xl font-semibold text-center text-darkBlue dark:text-blue-500 md:text-left md:pl-6 lg:pl-4 xl:pl-8 2xl:pl-12">
              Dev<span className="text-blue-500 dark:text-blue-300">/</span>
            </h3>
          </div>
          {icons_dev1.map((e, i, id) => {
            const Icon = e.icons;
            return (

              <div className="py-4 w-28 text-center" key={id}>
                <Icon
                  style={skills_icons}
                  className=" fill-slate-700 dark:fill-slate-400 m-auto"
                />
                <h1 className="title pt-2 text-slate-800 dark:text-slate-400">{e.title}</h1>
              </div>

            );
          })}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 lg:w-4/5 m-auto gap-4 justify-items-center py-14">
          <div className="subtitle w-full pb-4">
            <h3 className="text-4xl font-semibold text-center text-darkBlue dark:text-blue-500 md:text-left md:pl-6 lg:pl-4 xl:pl-8 2xl:pl-12">
              UX
              <span className="text-blue-500 dark:text-blue-300"> & </span>
              UI<span className="text-blue-500 dark:text-blue-300">/</span>
            </h3>
          </div>
          {icons_dev2.map((e, i, id) => {
            const Icon = e.icons;
            return (

              <div className="py-4 w-28 text-center" key={id}>
                <Icon
                  style={skills_icons}
                  className=" fill-slate-700 dark:fill-slate-400 m-auto"
                />
                <h1 className="title pt-2 text-slate-800 dark:text-slate-400">{e.title}</h1>
              </div>

            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
