import React from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <section className="tabs-section flex flex-wrap mt-16 mx-2 lg:mx-10">
        <div className="w-full">
          <ul
            className="flex m-auto list-none flex-wrap p-4 flex-row max-w-4xl"
            role="tablist"
          >
            <li className="mr-4 flex-1 text-center">
              <a
                className={
                  "text-sm font-bold uppercase px-5 py-4 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "cursor-default text-slate-900 bg-slate-300  transition-all dark:text-slate-100 dark:bg-slate-900"
                    : "text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all dark:text-slate-100 dark:bg-slate-800")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Projects
              </a>
            </li>
            <li className="flex-1 text-center">
              <a
                className={
                  "text-sm font-bold uppercase px-5 py-4 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "cursor-default text-slate-900 bg-slate-300 transition-all dark:text-slate-100 dark:bg-slate-900"
                    : "text-slate-700 bg-slate-100 dark:text-slate-100 hover:bg-slate-200 transition-all dark:bg-slate-800")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Skills
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Projects />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Skills />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
