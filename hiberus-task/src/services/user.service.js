import axios from "axios";
import authHeader from './auth-header';


const API_URL = "http://51.38.51.187:5050/api/v1/";

const getPublicContent = () => {
  return axios.get(API_URL + "users", { headers: authHeader() }); // todo
};

// const getUserBoard = () => {
//   return axios.get(API_URL + "user", { headers: authHeader() });
// };

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

export default {
  getPublicContent,
  // getUserBoard,
  // getModeratorBoard,
  // getAdminBoard,
};
