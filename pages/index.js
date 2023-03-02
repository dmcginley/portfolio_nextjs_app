import { Layout } from "../layout/Layout";
import Hero from "../components/Hero";
import Tabs from "../components/Tabs";
// import { motion } from "framer-motion"


// const social_icons = { color: "rgb(40, 98, 170)", fontSize: "2.6rem" };

export default function Home() {
  return (
    <Layout className="">
      <section className="main-grid ui-sans-serif dark:bg-darkBg">
        <Hero />
        <Tabs />
        {/* <Contact /> */}
      </section>
    </Layout >
  );
}
