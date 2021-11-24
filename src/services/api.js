import axios from 'axios';

const api = axios.create({
    baseURL: 'https://experiencein-api.azurewebsites.net'
});

export default api;