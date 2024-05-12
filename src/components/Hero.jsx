import React from "react";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="bg-purple-500 py-20 mb-4   shadow-lg shadow-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              JOB <span>BLOCK</span>
            </h1>
            <p className="my-4 text-xl text-white">
              Find the job that ultimately fits your skills and needs
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
