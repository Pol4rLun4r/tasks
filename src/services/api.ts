import axios from 'axios';
const REACT_MODE = import.meta.env.VITE_REACT_MODE;
const API_DEV = import.meta.env.VITE_REACT_URL_API_DEV;
const API = import.meta.env.VITE_REACT_URL_API;

const BASE_URL = REACT_MODE === 'dev' ? API_DEV : API

export const api = axios.create({
    baseURL: BASE_URL
})

export const apiPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})