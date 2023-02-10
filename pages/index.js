import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
// import Hero from "../components/Hero/Hero";

import { Layout } from "../layout/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
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

// const inter = Inter({ subsets: ["latin"] });

// const roboto = Roboto({
//   subset: ["latin"],
//   weight: ["400", "300"],
// });

const social_icons = { color: "rgb(40, 98, 170)", fontSize: "2.6rem" };

export default function Home() {
  return (
    <Layout className="">
      <section className="main-grid ui-sans-serif">
        <Hero />
        <Projects />
        <Skills />
        {/* <Contact /> */}
      </section>
    </Layout>
  );
}
