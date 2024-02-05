import axios from 'axios';

const endpoint = window.env.REACT_APP_API_URL || 'env not-found';

const checkUser = async (email, password) => {
  return await axios
    .post(`${endpoint}/login`, {
      email,
      password,
    })
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    })
    .finally(() => {
      // always executed
    });
};

const getUserByUuid = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios
    .get(`${endpoint}/user/info`, config)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    })
    .finally(() => {
      // always executed
    });
};

const createNewUser = async (firstName, lastName, email, password) => {
  return await axios
    .post(`${endpoint}/user`, {
      firstName,
      lastName,
      email,
      password,
    })
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    })
    .finally(() => {
      // always executed
    });
};

const loginWithGoogle = async (token, user) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const nameAndLastName = user?.displayName.split(' ');

  const newUserWithGoogle = {
    firstName: nameAndLastName[0],
    lastName: nameAndLastName[1],
    email: user?.email,
    password: user?.uid,
    avatar: user?.photoURL,
  };

  return await axios
    .post(`${endpoint}/user/google`, newUserWithGoogle, config)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    })
    .finally(() => {
      // always executed
    });
};

//TODO fazer rotas de projetos
const createNewProject = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log('token axios,,,, ', token); //TODO retirar log
  console.log('formData...>> ', formData);

  // try {
  //   const response = await axios.post(`${endpoint}/project`, formData, config);
  //   return response.data;
  // } catch (error) {
  //   console.error('Error creating new project:', error);
  //   return error.response.data;
  // }

  return await axios
    .post(`${endpoint}/project`, formData, config)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    })
    .finally(() => {
      // always executed
    });
};

/* const createNewProject = async (
  { title, tag, url, description, imgFile },
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log('token axios,,,, ', token); //TODO retirar log
  console.log('obj...>> ', title, tag, url, description, imgFile);

  return await axios
    .post(
      `${endpoint}/project`,
      {
        title,
        tag,
        url,
        description,
        imgFile,
      },
      config
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    })
    .finally(() => {
      // always executed
    });
}; */

/* const createNewProject = async (
  { title, tag, url, description, imgFile },
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log('token axios,,,, ', token); //TODO retirar log
  console.log('obj...>> ', title, tag, url, description, imgFile);

  return await axios
    .post(
      `${endpoint}/project`,
      {
        title,
        tag,
        url,
        description,
        imgFile,
      },
      config
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    })
    .finally(() => {
      // always executed
    });
}; */

const projectsWithUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios
    .get(`${endpoint}/user`, config)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    })
    .finally(() => {
      // always executed
    });
};

const projectWhitGoogle = async (token, uuid) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios
    .get(`${endpoint}/user/google/${uuid}`, config)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    })
    .finally(() => {
      // always executed
    });
};

const allProjects = async () => {
  return await axios
    .get(`${endpoint}/project`)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.status;
    })
    .finally(() => {
      // always executed
    });
};
const deleteProject = async (projectId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios
    .delete(`${endpoint}/project/${projectId}`, config)
    .then((response) => {
      return response?.status;
    })
    .catch((error) => {
      return error?.response?.status;
    })
    .finally(() => {
      // always executed
    });
};

const deleteProjectByGoogle = async (projectId, uuid, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios
    .delete(`${endpoint}/project/google/${projectId}?uuid=${uuid}`, config)
    .then((response) => {
      return response?.status;
    })
    .catch((error) => {
      return error?.response?.status;
    })
    .finally(() => {
      // always executed
    });
};

export {
  checkUser,
  createNewUser,
  loginWithGoogle,
  projectsWithUser,
  projectWhitGoogle,
  allProjects,
  deleteProject,
  createNewProject,
  deleteProjectByGoogle,
  getUserByUuid,
};
