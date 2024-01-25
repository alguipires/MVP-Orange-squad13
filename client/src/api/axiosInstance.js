import axios from 'axios';

const endpoint = "http://localhost:3001";

const checkUser = async (email, password) => {
  return await axios.post(`${endpoint}/login`, {
    email,
    password,
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    return error.response.data;
  }).finally(() => {
    // always executed
  });
};

const createNewUser = async (name, lastName, email, password) => {
  return await axios.post(`${endpoint}/register`, {
    name,
    lastName,
    email,
    password,
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    return error.response.data;
  }).finally(() => {
    // always executed
  });
}

export { checkUser, createNewUser };