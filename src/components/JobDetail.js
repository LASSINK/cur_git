import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobService from '../services/JobService';

function JobDetail() {
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const jobService = new JobService();
    jobService.getJob(id).then(setJob);
  }, [id]);

  if (!job) return <div>로딩 중...</div>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <h3>요구사항:</h3>
      <ul>
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <button onClick={() => alert('지원되었습니다!')}>지원하기</button>
    </div>
  );
}

export default JobDetail;
