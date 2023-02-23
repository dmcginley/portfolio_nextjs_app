import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import Hero from "../components/Hero/Hero";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { Layout } from "../layout/Layout";
import Hero from "../components/Hero";
import Tabs from "../components/Tabs";

import Contact from "../components/Contact";

import styles from "../styles/Home.module.css";
import {
  SiDjango,
  SiPython,
  SiJavascript,
  SiGithub,
  SiTwitter,
} from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";


const social_icons = { color: "rgb(40, 98, 170)", fontSize: "2.6rem" };

export default function Home() {
  return (
    <Layout className="">
      <section className="main-grid ui-sans-serif dark:bg-darkBg">
        <Hero />
        <Tabs />
        {/* <Contact /> */}
      </section>
    </Layout>
  );
}
