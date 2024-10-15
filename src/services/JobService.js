import axios from 'axios';

class JobService {
  async getJobs() {
    const response = await axios.get('/api/jobs');
    return response.data;
  }

  async getJob(id) {
    const response = await axios.get(`/api/jobs/${id}`);
    return response.data;
  }

  async applyForJob(jobId, userId) {
    const response = await axios.post('/api/applications', { jobId, userId });
    return response.data;
  }
}

export default JobService;
