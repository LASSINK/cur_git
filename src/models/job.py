class Job:
    def __init__(self, id, title, description, employer, requirements):
        self.id = id
        self.title = title
        self.description = description
        self.employer = employer
        self.requirements = requirements

class JobPosting:
    def __init__(self, job, posted_date, deadline):
        self.job = job
        self.posted_date = posted_date
        self.deadline = deadline
