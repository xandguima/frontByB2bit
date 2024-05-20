//import axios from 'axios';

import axios from './baseService';

const baseURL = 'https://api.homologation.cliqdrive.com.br/auth';



export default class Api {
  async post(path: string, email: string, password: string) {
    try {
      
      const payload = {
        email: email,
        password: password,
      };
      const response = await axios.post(baseURL + path, payload);

      console.log("response dentro do post: ", response.data);
      return response.data;

    } catch (error: any) {
      console.error(" Error on post: ", error.request);
      

    }
  }
  async get(path: string) {
    try {
      const response = await axios.get(baseURL + path);
      console.log("response dentro do get: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error on get: ", error);

    }
  }
}


