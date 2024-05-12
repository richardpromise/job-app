import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CgWorkAlt } from "react-icons/cg";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="bg-purple-500  border-gray-700">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-center md:justify-start">
              {/* <!-- Logo --> */}
              <Link className="flex flex-shrink-0 items-center mr-4" to="/">
                <div className=" rotate-45 mr-3">
                  <CgWorkAlt size={69} color="white" />{" "}
                </div>
                <span className="hidden md:block text-white text-2xl font-bold ml-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 pr-16 pl-4  rounded-r-xl">
                  Job block
                </span>
              </Link>

              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <Link
                    to={"/"}
                    className={`${
                      pathname === "/" ? "bg-purple-950" : ""
                    }  text-white border-b-2 border-gray-900 hover:duration-500 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                  >
                    Home
                  </Link>

                  <Link
                    to={"/jobs"}
                    className={`${
                      pathname === "/jobs" ? "bg-purple-950" : ""
                    }  text-white border-b-2 border-gray-900 hover:duration-500 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                  >
                    Jobs
                  </Link>

                  <Link
                    to={"/add-job"}
                    className={`${
                      pathname === "/add-job" ? "bg-purple-950" : ""
                    }  text-white border-b-2 border-gray-900 hover:duration-500 hover:bg-purple-950 hover:text-white rounded-md px-3 py-2`}
                  >
                    Add job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
