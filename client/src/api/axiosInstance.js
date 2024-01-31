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

const loginWithGoogle = async (token, user) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };
  const nameAndLastName = user.displayName.split(' ');

  const newUserWithGoogle = {
    firstName: nameAndLastName[0],
    lastName: nameAndLastName[1],
    email: user.email,
    password: user.uid,
    avatar: user.photoURL,
  };

    return await axios.post(`${endpoint}/user/google`, newUserWithGoogle, config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    })
    .finally(() => {
      // always executed
    });

};


export { checkUser, createNewUser, loginWithGoogle };