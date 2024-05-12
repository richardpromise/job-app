import React from "react";
import { useEffect } from "react";

import JobCard from "./JobCard";
import { RotateLoader } from "react-spinners";

const JobListitng = ({ isHome = false, bg }) => {
  //   const pageJobs = isHome ? jobs.slice(0, 3) : jobs;
  const [Jobs, setJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const apiUrl = isHome
    ? "http://localhost:5000/jobs?_limit=3"
    : "http://localhost:5000/jobs";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Unable to fetch ", error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, [apiUrl]);

  return (
    <section className={`${isHome ? "bg-blue-50 " : bg} px-4 py-10`}>
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div
          className={`${
            loading
              ? "flex justify-center items-center "
              : "grid grid-cols-1 md:grid-cols-3 gap-6"
          }`}
        >
          {loading === true ? (
            <div className="flex h-full items-center justify-center p-8">
              {" "}
              <RotateLoader color="#a755f7" />
            </div>
          ) : (
            <>
              {Jobs.map((jobs) => (
                <JobCard key={jobs.id} job={jobs} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListitng;
