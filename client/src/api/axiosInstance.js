import axios from 'axios';

const endpoint = "http://localhost:3001";

const checkUser = async (email, password) => {
  return axios.post(`${endpoint}/login`, {
    email,
    password,
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    console.log(error);
  }).finally(() => {
    // always executed
  });
};


export { checkUser };