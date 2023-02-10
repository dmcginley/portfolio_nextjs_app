import React from "react";
import Image from "next/image";
// import mypic from "../public/static/images/project_1.png";

import { projects } from ".././constants/constants";

const Projects = () => (
  <section className="projects-section px-4 pt-10 md:p-8 lg:px-20">
    <div
      id="project"
      className="text-4xl lg:text-6xl px-6 py-8 md:pt-8 md:pb-10 lg:pt-20 lg:pb-16 font-semibold text-darkBlue md:items-center text-center md:text-left"
    >
      <h3>
        my<span className="text-blue-500">_</span>Projects
        <span className="text-blue-500">/</span>
      </h3>
    </div>
    <div className="flex flex-col justify-center md:grid md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14 md:px-6">
      {projects.map(
        ({
          id,
          title,
          image,
          description,
          author,
          date,
          tags,
          website,
          source,
        }) => (
          <div className="card m-auto" key={id}>
            <div className="group inline-block rounded-md shadow-lg">
              <div className="relative mx-auto max-w-md md:max-w-none">
                <div className="flex justify-center items-center relative">
                  <Image
                    src={image}
                    className="rounded-t-md object-cover group-hover:opacity-40 transition-all duration-500"
                    alt="Picture of the project website"
                    width="740"
                    height="600"
                    // fill
                  />
                  <div className="absolute flex gap-2 md:gap-6 2xl:gap-12">
                    <a
                      href={website}
                      // className=" invisible group-hover:visible group-hover:transition-all  text-slate-900 hover:bg-slate-100/50 text-xl rounded-full border-solid border-slate-800 border-2 py-1 px-4 m-1 font-semibold"
                      className=" invisible group-hover:visible group-hover:transition-all  text-slate-900 hover:bg-slate-700 hover:text-slate-50 hover:border-slate-700 text-xl rounded-full border-solid border-slate-800 border-2 py-1 px-4 m-1 font-semibold"
                      target="_blank"
                    >
                      Live Site
                    </a>
                    <a
                      href={source}
                      className=" invisible group-hover:visible group-hover:transition-all  text-slate-900 hover:bg-slate-700 hover:text-slate-50 hover:border-slate-700 text-xl rounded-full border-solid border-slate-800 border-2 py-1 px-4 m-1 font-semibold"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="p-6 transition-all rounded-b-md ">
                    <h3 className="text-2xl pb-1 text-gray-900 font-semibold md:w-64 lg:w-full whitespace-nowrap text-ellipsis overflow-hidden">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {author} • <time>{date}</time>
                    </p>
                    <p className="text-gray-600 mt-4 font-semibold">Stack</p>
                    <div className="mt-2 flex gap-2">
                      {tags.map((tags, i) => (
                        <span
                          key={i}
                          className="rounded-full border-solid border-slate-500 border px-2 py-1 text-xs font-semibold text-slate-600"
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
