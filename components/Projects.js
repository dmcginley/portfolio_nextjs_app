import React from "react";
import Image from "next/image";
// import mypic from "../public/static/images/project_1.png";

import { projects } from ".././constants/constants";

const Projects = () => (
  <section className="px-4 md:p-8">
    <div
      id="project"
      className="text-4xl lg:text-6xl px-6 py-8 md:pt-16 font-semibold text-darkBlue md:items-center text-center md:text-left"
    >
      <h3>My Projects</h3>
    </div>
    <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14 md:px-6">
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
          <div className="card" key={id}>
            <a href="#" className="group bg-slate-700">
              <div className=" relative mx-auto max-w-md md:max-w-none flex flex-col lg:flex-row">
                <Image
                  src={image}
                  className="rounded-md object-cover"
                  alt="Picture of the project website"
                  width="740"
                  height="600"
                  // fill
                />
                <div className="absolute flex flex-col justify-end h-full w-full ">
                  <div className="bg-gradient-to-t from-slate-800 group-hover:bg-slate-900 p-6 transition-all rounded-b-md">
                    <h3 className="text-2xl pb-1 text-gray-50">{title}</h3>
                    <p className="text-sm text-gray-300">
                      {author} • <time>{date}</time>
                    </p>
                    <p className="text-gray-300 mt-4">Stack</p>
                    <div className="mt-2 flex gap-2">
                      {tags.map((tags, i) => (
                        <span
                          key={i}
                          className="rounded-full border-solid border-slate-300 border px-2 py-1 text-xs font-semibold text-slate-300"
                        >
                          {tags}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )
      )}
    </div>
  </section>
);
export default Projects;
