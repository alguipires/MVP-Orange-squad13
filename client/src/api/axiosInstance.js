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

const createNewUser = async (firstName, lastName, email, password) => {
  return await axios.post(`${endpoint}/user`, {
    firstName,
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