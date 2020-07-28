import axios from 'axios';
const base = '/api';

const API = {
  post: (endpoint, data) => {
    return axios.post(`${base}${endpoint}`, data).then(response => response.data);
  },
};

export default API;
