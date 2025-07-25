import axios from 'axios';

const instance = axios.create({
  baseURL: `http://${window.location.hostname}:9090`
});

instance.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    return Promise.reject(error);
  }
);

export default instance;
