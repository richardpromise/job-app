import React from "react";
import JobListitng from "../components/JobListitng";

const Jobs = () => {
  return (
    <>
      <section className="bg-[#fafafa] h-screen px-4 py-6">
        <JobListitng isHome={false} bg={"bg-[#fafafa]"} />
      </section>
    </>
  );
};

export default Jobs;
