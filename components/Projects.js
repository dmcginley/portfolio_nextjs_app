import React from "react";
import Image from "next/image";
// import mypic from "../public/static/images/project_1.png";

import { projects } from ".././constants/constants";

const Projects = () => (
  <section className="projects-section px-4 pt-10 md:p-8 lg:px-20 dark:bg-darkBg">
    <div
      id="project"
      className="text-4xl lg:text-6xl px-6 py-8 md:pt-8 md:pb-10 lg:pt-20 lg:pb-16 font-semibold text-darkBlue dark:text-blue-500 md:items-center text-center md:text-left"
    >
      <h3>
        my<span className="text-blue-500 dark:text-blue-300">_</span>Projects
        <span className="text-blue-500 dark:text-blue-300">/</span>
      </h3>
    </div>
    <div className="flex flex-col justify-center md:grid md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14 md:px-6">
      {projects.map(
        ({
          id,
          title,
          image,
          description,
          project,
          date,
          tags,
          website,
          source,
        }) => (
          <div className="card m-auto" key={id}>
            <div className="inline-block rounded-md shadow-lg hover:shadow-xl transition-all dark:bg-slate-800">
              <div className="relative mx-auto max-w-md md:max-w-none">
                <div className="flex justify-center items-center relative">
                  <Image
                    src={image}
                    className="rounded-t-md object-cover"
                    alt="Picture of the project website"
                    width="740"
                    height="600"
                    // fill
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <div className="p-6 rounded-b-md">
                    <h3 className="text-2xl pb-1 text-gray-900 font-semibold md:w-64 lg:w-full whitespace-nowrap text-ellipsis overflow-hidden dark:text-slate-100">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-slate-400">
                      <strong>{project}</strong> • <time>{date}</time>
                    </p>

                    <div className="py-6">
                      <a
                        href={website}
                        className=" button py-2 px-4 rounded-md font-semibold text-slate-800 hover:bg-slate-700 hover:text-slate-50 hover:border-slate-700  dark:bg-slate-700 dark:text-slate-50 dark:border-slate-700 border border-solid border-slate-800 hover:dark:bg-slate-900 hover:shadow-2xl transition-all"
                        target="_blank"
                      >
                        Live Site
                      </a>
                      <a
                        href={source}
                        className="ml-4 button py-2 px-4 rounded-md font-semibold text-slate-800 hover:bg-slate-700 hover:text-slate-50 hover:border-slate-700  dark:bg-slate-700 dark:text-slate-50 dark:border-slate-700 border border-solid border-slate-800 hover:dark:bg-slate-900 hover:shadow-2xl transition-all"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </div>

                    <p className="text-gray-600 dark:text-slate-200 font-semibold">
                      Stack
                    </p>
                    <div className="mt-2 flex gap-2">
                      {tags.map((tags, i) => (
                        <span
                          key={i}
                          className="rounded-full border-solid border-slate-500 border px-2 py-1 text-xs font-semibold text-slate-600 dark:text-slate-400"
                        >
                          {tags}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  </section>
);
export default Projects;
