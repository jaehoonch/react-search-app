import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 62d401439134da09adf1ca68add6a508e45a9f54e96da1632c241713951e9da9'
    }
});