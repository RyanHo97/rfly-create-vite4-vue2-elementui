import axios from 'axios';

const service = axios.create({
  // baseURL: 'http://www.yourapisite/api/',
  baseURL: 'http://localhost:3000/api/v1/',
  withCredentials: true,
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json',
  }
});

export default service;
