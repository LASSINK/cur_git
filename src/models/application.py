from datetime import datetime

class JobApplication:
    def __init__(self, job_seeker, job_posting):
        self.job_seeker = job_seeker
        self.job_posting = job_posting
        self.application_date = datetime.now()
        self.status = "Pending"

    def update_status(self, new_status):
        self.status = new_status
