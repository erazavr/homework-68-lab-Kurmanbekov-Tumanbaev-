import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'https://homework-ernur.firebaseio.com/'
});

export default axiosAPI;