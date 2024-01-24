const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  DELETED: 204,
  NOT_FOUND: 404,
  NOT_FOUND_2: 400,
  UNAUTHORIZED: 401,
  CONFLICT: 409,
  INVALID_VALUE: 422,
};

const mapStatusHTTP = (status) => httpErrorMap[status] || 500;

module.exports = mapStatusHTTP;