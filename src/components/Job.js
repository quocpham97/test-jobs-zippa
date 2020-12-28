import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import FilterJob from "./FilterJob";
import CustomizedNativeSelect from "./CustomizedNativeSelect";

function Job() {
  //store all jobs get from api
  const [jobs, setJobs] = useState([]);

  //store first 10 jobs
  const [tenJobs, setTenJobs] = useState([]);

  //store company name list
  const [companyNames, setCompanyNames] = useState([]);
  useEffect(() => {
    axios
      .post("https://www.zippia.com/api/jobs/", {
        companySkills: true,
        dismissedListingHashes: [],
        fetchJobDesc: true,
        jobTitle: "Business Analyst",
        locations: [],
        numJobs: 20,
        previousListingHashes: []
      })
      .then((result) => {
        setJobs(result.data.jobs);
        setTenJobs(result.data.jobs.slice(0, 10));
        setCompanyNames(
          result.data.jobs
            .map((filter) => filter.companyName) //filter only company name from data
            .filter(function (value, index, self) {
              //make sure company name not duplicate
              return self.indexOf(value) === index;
            })
        );
      });
  }, []);

  return (
    <div>
      {/* <FilterJob companyNames={companyNames} jobs={jobs} /> */}
      <CustomizedNativeSelect companyNames={companyNames} />

      <div className="jobcard-container">
        {tenJobs.map((job) => (
          <JobCard {...job} key={job.jobId} />
        ))}
      </div>
    </div>
  );
}

export default Job;
