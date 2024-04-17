import axios from 'axios';

axios.defaults.baseURL = 'https://661e4c0d98427bbbef041982.mockapi.io';

export function get_contacts() {
    const data = axios.get('/contacts');
    return data;
}

export function post_contact(contact) {
    const data = axios.post('/contacts', contact);
    return data;
}

export function delete_contact(id) {
    const data = axios.delete(`/contacts/${id}`);
    return data;
}
