import axios from 'axios';

const endpoint = 'http://localhost:3001';

const checkUser = async (email, password) => {
  return await axios
    .post(`${endpoint}/login`, {
      email,
      password,
    })
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

const createNewUser = async (firstName, lastName, email, password) => {
  return await axios
    .post(`${endpoint}/user`, {
      firstName,
      lastName,
      email,
      password,
    })
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

const loginWithGoogle = async (token, user) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
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

  return await axios
    .post(`${endpoint}/user/google`, newUserWithGoogle, config)
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

//TODO fazer rotas de projetos

const createNewProject = async (title, tags, link, description, imgFile) => {
  return await axios
    .post(`${endpoint}/project`, {
      title,
      tags,
      link,
      description,
      imgFile,
    })
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

const projectsWithUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios
    .get(`${endpoint}/user`, config)
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

const projectWhitGoogle = async (token, uuid) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios
    .get(`${endpoint}/user/google/${uuid}`, config)
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

const allProjects = async () => {
  return await axios
    .get(`${endpoint}/projects`)
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
const deleteProject = async (token, projectId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios
    .delete(`${endpoint}/project/${projectId}`, config)
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

export {
  checkUser,
  createNewUser,
  loginWithGoogle,
  projectsWithUser,
  projectWhitGoogle,
  allProjects,
  deleteProject,
  createNewProject,
};
