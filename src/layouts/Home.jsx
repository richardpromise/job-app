import React from "react";

import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListitng from "../components/JobListitng";
import ViewAllJobs from "../components/ViewAllJobs";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListitng isHome />
      <ViewAllJobs
        onClick={(e) => {
          e.preventDefault();
        }}
      />
    </>
  );
};

export default Home;
