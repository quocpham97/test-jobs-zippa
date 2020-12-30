import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import FilterJob from "./FilterJob";
import styles from "./Job.module.css";

function Job() {
  // Store all jobs get from api
  const [jobs, setJobs] = useState([]);

  // Store first 10 jobs
  const [tenJobs, setTenJobs] = useState([]);

  // Store company name list
  const [companyNames, setCompanyNames] = useState([]);

  const [companyName, setCompanyName] = useState("first10jobs");
  const [isSevenLastDays, setIsSevenLastdays] = useState(false);

  // Get jobs from api
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
            .map((filter) => filter.companyName) // Filter only company name from data
            .filter(function (value, index, self) {
              // Make sure company name not duplicate
              return self.indexOf(value) === index;
            })
        );
      });
  }, []);

  function handleCompanyChange(companyName) {
    setCompanyName(companyName);
    if (!isSevenLastDays) {
      if (companyName === "first10jobs") setTenJobs(jobs.slice(0, 10));
      else {
        setTenJobs(
          // Filter jobs by company name
          jobs.filter(function (company) {
            return company.companyName === companyName;
          })
        );
      }
    } else {
      if (companyName === "first10jobs") {
        setTenJobs(
          jobs
            .filter(function (company) {
              var d = new Date();
              // Filter 10 jobs in last 7 days
              return Date.parse(company.OBJpostingDate) >= d.setDate(d.getDate() - 7);
            })
            .slice(0, 10)
        );
      } else {
        setTenJobs(
          // Filter jobs by company name
          jobs.filter(function (company) {
            var d = new Date();
            return (
              company.companyName === companyName &&
              Date.parse(company.OBJpostingDate) >= d.setDate(d.getDate() - 7)
            );
          })
        );
      }
    }
  }

  function handleButtonChange(flag) {
    setIsSevenLastdays(flag);
  }

  // Call handleCompanyChange whenever isSevenLastDays change
  useEffect(() => {
    handleCompanyChange(companyName);
    // eslint-disable-next-line
  }, [isSevenLastDays]);

  return (
    <div>
      <FilterJob
        companyNames={companyNames}
        onChange={handleCompanyChange}
        handleButtonChange={handleButtonChange}
      />

      <div className={styles.jobcardContainer}>
        {tenJobs.map((job) => (
          <JobCard {...job} key={job.jobId} />
        ))}
      </div>
    </div>
  );
}

export default Job;
