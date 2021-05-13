import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID Vf3hwxZk9xWrQt_ZrHv8s5he-9daAx1j-097tKmQDuA",
    },
});