import React from "react";

import { RiLinkedinFill } from "react-icons/ri";
import { SiGithub, SiTwitter } from "react-icons/si";
const social_icons = { color: "475569", fontSize: "2.6rem" };

const Hero = () => {
  return (
    <section className="hero-section">
      {/* hero */}
      <div className="p-6 px-8 sm:px-4  md:py-20 pb-4 md:pb-24 bg-gray-200">
        <div className="hero flex justify-center lg:justify-start lg:px-24 items-end px-3">
          <img
            className="rounded-3xl h-36 w-36 md:h-44  md:w-44"
            src="static/images/cat_3.png"
            alt=""
          />

          <div className="pl-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold pb-2 pl-2 text-slate-800">
              Donnchadh Mc Ginley
            </h1>
            <p className="text-darkBlue text-lg lg:text-2xl pl-2">
              Fullstack develiper
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
                  className="hover:fill-darkBlueHover transition-all"
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
                  className="hover:fill-darkBlueHover transition-all"
                />
              </a>
              <a
                className="p-2"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTwitter
                  style={social_icons}
                  className="hover:fill-darkBlueHover transition-all"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* social icons mobile */}
      <div className="flex justify-center pt-4 md:hidden bg-gray-200 pb-10">
        <a
          className="p-2"
          href="https://github.com/dmcginley"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub style={social_icons} />
        </a>
        <a
          className="p-2 mx-12"
          href="https://www.linkedin.com/in/donnchadh-mc-ginley/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinFill style={social_icons} />
        </a>
        <a className="p-2" href="" target="_blank" rel="noopener noreferrer">
          <SiTwitter style={social_icons} />
        </a>
      </div>
    </section>
  );
};
export default Hero;
