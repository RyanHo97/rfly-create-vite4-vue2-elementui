import axios from 'axios';

const service = axios.create({
  baseURL: 'http://www.yourapisite/api/',
  withCredentials: true,
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  }
});

export default service;
