import React from "react";
import { Link } from "react-router-dom";

const ViewAllJobs = ({ onClick }) => {
  return (
    <>
      <section className="m-auto max-w-lg my-10 px-6" onClick={onClick}>
        <Link
          to="/jobs"
          className="block bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </Link>
      </section>
    </>
  );
};

export default ViewAllJobs;
