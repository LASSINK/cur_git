class JobService:
    def __init__(self):
        self.job_postings = []
        self.applications = []

    def post_job(self, job_posting):
        self.job_postings.append(job_posting)

    def apply_for_job(self, job_seeker, job_posting):
        application = JobApplication(job_seeker, job_posting)
        self.applications.append(application)
        return application

    def get_applications_for_employer(self, employer):
        return [app for app in self.applications if app.job_posting.job.employer == employer]

    def get_applications_for_job_seeker(self, job_seeker):
        return [app for app in self.applications if app.job_seeker == job_seeker]

