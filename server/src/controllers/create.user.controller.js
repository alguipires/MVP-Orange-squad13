const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { createUserService } = require('../services');

const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const { status, data } = await createUserService.createPostService(firstName, lastName, email, password)
    return res.status(mapStatusHTTP(status)).json(data);
}

const createUserWithGoogle = async (req, res) => {
    const token = req.headers.authorization;
    const { firstName, lastName, email, password, avatar } = req.body;
    const { status, data } = await createUserService.createUserWithGooglePostService(firstName, lastName, email, password, avatar, token)
    return res.status(mapStatusHTTP(status)).json(data);
}

module.exports = {
    createUser,
    createUserWithGoogle
}