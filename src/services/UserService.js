import axios from 'axios';

class UserService {
  async getCurrentUser() {
    const response = await axios.get('/api/users/me');
    return response.data;
  }

  async updateProfile(userData) {
    const response = await axios.put('/api/users/me', userData);
    return response.data;
  }
}

export default UserService;
