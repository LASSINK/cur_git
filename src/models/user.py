from abc import ABC, abstractmethod

class User(ABC):
    def __init__(self, id, name, email):
        self.id = id
        self.name = name
        self.email = email

    @abstractmethod
    def get_profile(self):
        pass

class JobSeeker(User):
    def __init__(self, id, name, email, skills, experience):
        super().__init__(id, name, email)
        self.skills = skills
        self.experience = experience

    def get_profile(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "skills": self.skills,
            "experience": self.experience
        }

class Employer(User):
    def __init__(self, id, name, email, company, industry):
        super().__init__(id, name, email)
        self.company = company
        self.industry = industry

    def get_profile(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "company": self.company,
            "industry": self.industry
        }
