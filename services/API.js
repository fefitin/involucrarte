import axios from 'axios';
const base = '/api';

const API = {
  post: (endpoint, data, options = {}) => {
    //Build formdata to support file uploads
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    return axios.post(`${base}${endpoint}`, formData, options).then(response => response.data);
  },
};

export default API;
