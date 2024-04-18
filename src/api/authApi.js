import axios from 'axios';

export const authApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

export function setToken(token) {
    authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function clearToken() {
    authApi.defaults.headers.common.Authorization = '';
}
