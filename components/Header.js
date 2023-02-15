import React from "react";
import ThemeToggler from "../components/ThemeToggler";

const Header = () => {
  return (
    <div className="nav-section">
      <nav className=" bg-gray-200 dark:bg-gray-800">
        <div className="px-6 md:px-10 flex h-16 items-center justify-center md:justify-end">
          <div className=" inset-y-0 flex items-center">
            <ul className="flex align-middle justify-center">
              <li className="mr-3">
                <a
                  className="inline-block rounded py-1.5 px-4 bg-darkBlue dark:bg-blue-500 text-white"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block rounded hover:border-gray-200 dark:hover:bg-slate-900 text-darkBlue dark:text-blue-500 hover:bg-gray-300 py-1.5 px-4"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              {/* <li className="mr-3">
                <a
                  className="inline-block rounded hover:border-gray-200 text-darkBlue hover:bg-gray-300 py-1.5 px-4 "
                  href="#contact"
                >
                  Contact
                </a>
              </li> */}
              <li className="mr-3">
                <a
                  className="inline-block rounded hover:border-gray-200 dark:hover:bg-slate-900 text-darkBlue dark:text-blue-500 hover:bg-gray-300 py-1.5 px-4"
                  href="/static/new_cv2023.pdf"
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
