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
      
      return response.data;

    } catch (error) {
      throw error;
    }
  }
  async get(path: string) {
    try {
      const response = await axios.get(baseURL + path);
      
      return response.data;
      
    } catch (error) {
      throw error;

    }
  }
}


