import axios from 'axios';

const API_URL = 'http://51.38.51.187:5050/api/v1/auth/';

const register = (name, surname, email, password) => {
    return axios.post(API_URL + 'sign-up', {
        name, surname, email, password
    });
};

const login = (email, password) => {
    return axios
        .post(API_URL + 'log-in', {
            email,
            password,
        })
        .then((response) => {

            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('user');
};

export default {
    register,
    login,
    logout,
};
