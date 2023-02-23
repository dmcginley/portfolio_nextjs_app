import React from "react";
import ThemeToggler from "../components/ThemeToggler";

const Header = () => {
  return (
    <div className="nav-section">
      <nav className=" bg-gray-200 dark:bg-gray-800">
        <div className="px-6 md:px-10 flex h-16 items-center justify-end">
          <div className=" inset-y-0 flex items-center">
            <ul className="flex align-middle justify-center">
              {/* <li className="mr-3">
                <a
                  className="inline-block rounded py-1.5 px-4 bg-darkBlue dark:bg-blue-500 text-white"
                  href="/"
                >
                  Home
                </a>
              </li> */}
              {/* <li className="mr-3">
                <a
                  className="inline-block rounded hover:border-gray-200 dark:hover:bg-slate-900 text-darkBlue dark:text-blue-500 hover:bg-gray-300 py-1.5 px-4"
                  href="#skills"
                >
                  Skills
                </a>
              </li> */}
              {/* <li className="mr-3">
                <a
                  className="inline-block rounded hover:border-gray-200 text-darkBlue hover:bg-gray-300 py-1.5 px-4 "
                  href="#contact"
                >
                  Contact
                </a>
              </li> */}
              <li className="mr-4">
                <a
                  className="inline-block rounded bg-darkBlue text-slate-100 hover:bg-sky-600 dark:bg-slate-700 dark:hover:bg-slate-900 text-darkBlue transition-all shadow-lg py-1.5 px-4"
                  href="/static/cv_2023.pdf"
                  download
                >
                  Resume
                </a>
              </li>
              <li className="m-auto">
                <ThemeToggler />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
