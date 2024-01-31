const options = {
  host: process.env.MYSQL_HOST  || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database: process.env.MYSQL_DATABASE || 'orange_portifolio_db',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'orangemvp',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  }
};
