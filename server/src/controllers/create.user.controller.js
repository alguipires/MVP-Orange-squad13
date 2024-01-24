const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const { status, data } = await createUserService.createPostService(firstName, lastName, email, password)
    return res.status(mapStatusHTTP(status)).json(data);
}

module.exports = {
    createUser
}