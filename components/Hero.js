import React from "react";

import { RiLinkedinFill } from "react-icons/ri";
import { SiGithub, SiGmail } from "react-icons/si";

const social_icons = { color: "475569", fontSize: "2.6rem" };

const Hero = () => {
  return (
    <section className="hero-section">
      {/* hero */}
      <div className="p-6 px-8 sm:px-4  md:py-28 lg:py-32 pb-4 md:pb-28 bg-gray-200 dark:bg-gray-800">
        <div className="hero flex justify-center lg:justify-start px-3 md:px-14 xl:px-32 items-end">
          <img
            className="rounded-3xl h-32 w-32 sm:h-40  sm:w-40 md:h-52  md:w-52 lg:h-64 lg:w-64"
            src="static/images/cat_3.png"
            alt=""
          />

          <div className="pl-6 md:pl-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold pb-2 pl-2 text-slate-800 dark:text-slate-100">
              Donnchadh Mc Ginley
            </h1>
            <p className="text-slate-700 dark:text-slate-400 text-lg md:text-xl xl:text-2xl pl-2">
              FullStack developer
            </p>
            {/* social icons desktop*/}
            <div className="pt-4 hidden md:flex">
              <a
                className="p-2"
                href="https://github.com/dmcginley"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub
                  style={social_icons}
                  className="hover:fill-darkBlueHover transition-all fill-slate-600 dark:fill-slate-500 dark:hover:fill-darkBlueHover"
                />
              </a>
              <a
                className="p-2 mx-12"
                href="https://www.linkedin.com/in/donnchadh-mc-ginley/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinFill
                  style={social_icons}
                  className="hover:fill-darkBlueHover transition-all fill-slate-600 dark:fill-slate-500 dark:hover:fill-darkBlueHover"
                />
              </a>
              <a
                className="p-2"
                href="mailto:mcginley.donn@gmail.com?subject=Fullstack%20develiper%20query"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail
                  style={social_icons}
                  className="hover:fill-darkBlueHover transition-all fill-slate-600 dark:fill-slate-500 dark:hover:fill-darkBlueHover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* social icons mobile */}
      <div className="flex justify-center pt-4 md:hidden bg-gray-200 dark:bg-gray-800 pb-10">
        <a
          className="p-2"
          href="https://github.com/dmcginley"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub
            style={social_icons}
            lable="GiitHub"
            className="hover:fill-darkBlueHover transition-all fill-slate-600 dark:fill-slate-500 dark:hover:fill-darkBlueHover"
          />
        </a>
        <a
          className="p-2 mx-12"
          href="https://www.linkedin.com/in/donnchadh-mc-ginley/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinFill
            style={social_icons}
            className="hover:fill-darkBlueHover transition-all fill-slate-600 dark:fill-slate-500 dark:hover:fill-darkBlueHover"
          />
        </a>
        <a
          className="p-2"
          href="mailto:mcginley.donn@gmail.com?subject=Fullstack%20develiper%20query"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail
            style={social_icons}
            className="hover:fill-darkBlueHover transition-all fill-slate-600 dark:fill-slate-500 dark:hover:fill-darkBlueHover"
          />
        </a>
      </div>
    </section>
  );
};
export default Hero;
