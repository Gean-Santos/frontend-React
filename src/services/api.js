import axios from 'axios';
const api = axios.create({
    baseURL: 'https://omnistack-gean.herokuapp.com'
});
export default api;