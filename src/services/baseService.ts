import axios from "axios";
import Cookies from "js-cookie";


axios.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json;version=v1_web";

    if (config.method === 'get') {
      const token =  Cookies.get('accessToken'); 
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(`interceptorGet ${error}`)
)


export default axios;