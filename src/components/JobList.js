import React, { useState, useEffect } from 'react';
import JobService from '../services/JobService';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobService = new JobService();
    jobService.getJobs().then(setJobs);
  }, []);

  return (
    <div>
      <h2>구직 목록</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
