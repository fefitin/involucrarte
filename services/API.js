import axios from 'axios';
const base = '/api';

const API = {
  post: (endpoint, data, options = {}) => {
    let formData;

    if (options.headers && options.headers['Content-Type'] === 'multipart/form-data') {
      //Build formdata to support file uploads
      formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    } else {
      formData = data;
    }

    return axios.post(`${base}${endpoint}`, formData, options).then(response => response.data);
  },
};

export default API;
