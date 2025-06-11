import axios from 'axios';
const api = axios.create({ baseURL: '/api' });
export const submitContact = (data) => api.post('/contacts', data);
export default api;