import React from "react";

import { Outlet } from "react-router-dom";

const UnAunthenticated = () => {
  return (
    <div className="h-full w-full bg-slate-50  flex">
      {/* dynamic */}
      <div className="md:w-1/2 w-full">
        <Outlet />
      </div>

      {/* static */}
      <div className="w-1/2 bg-slate-50 h-full hidden md:block relative overflow-hidden">
        <div className="absolute top-32 -right-44 2xl:-right-72 2xl:top-24 w-[120%] 2xl:h-[80%] h-[70%] bg-purple-500 rotate-3  shadow-lg shadow-purple-500"></div>
        <div className="flex flex-col justify-center h-screen w-full items-center ">
          <h1 className="font-bold text-purple-200 text-6xl lg:text-8xl 2xl:text-9xl  z-10">
            Job
            <span className="text-pretty text-white 2xl:text-8xl">Block</span>
          </h1>
          <p className="pt-14 text-white 2xl:text-xl font-bold z-10">
            Find the job that suites your skill.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnAunthenticated;
