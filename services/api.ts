import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.off-let.com',
});

export default api;
