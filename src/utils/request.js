import axios from 'axios'
const service = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 10000, // Request timeout
});

// Request intercepter
service.interceptors.request.use(
  config => {
    const token = localStorage.token;
    const tokent_type = localStorage.token_type;
    if (token) {
      config.headers['Authorization'] = tokent_type + ' ' + token;
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response pre-processing
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
