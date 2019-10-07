import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-7ec1e.firebaseio.com/'
});

export default instance;