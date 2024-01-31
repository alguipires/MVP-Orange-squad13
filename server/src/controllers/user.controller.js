const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { userService } = require('../services');
const { getProjectByIdService } = require('../services/project.service');

const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const { status, data } = await userService.createPostService(firstName, lastName, email, password)
    return res.status(mapStatusHTTP(status)).json(data);
}

const createUserWithGoogle = async (req, res) => {
    const token = req.headers.authorization;
    const { firstName, lastName, email, password, avatar } = req.body;
    const { status, data } = await userService.createUserWithGooglePostService(firstName, lastName, email, password, avatar, token)
    return res.status(mapStatusHTTP(status)).json(data);
}

const getProjectsByUserId = async (req, res) => {
    const userUuid = req.getPayload.uuid;
    const { status, data } = await userService.projectWhitIdService(userUuid);
    return res.status(mapStatusHTTP(status)).json(data);
}

const getProjectsByUserIdGoogle = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const { uuid } = req.params;
    const { status, data } = await userService.projectsWhitGoogleService(token, uuid);
    return res.status(mapStatusHTTP(status)).json(data);
}

module.exports = {
    createUser,
    createUserWithGoogle,
    getProjectsByUserId,
    getProjectsByUserIdGoogle
}