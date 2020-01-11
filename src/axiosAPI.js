import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'https://counter-hw-68.firebaseio.com/'
});

export default axiosAPI;