import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.194:8000/'
})

export default api;