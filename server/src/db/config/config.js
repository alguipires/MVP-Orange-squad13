const options = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB_NAME,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

console.log('ENV..... ', options);

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};

//TODO verificar porque não esta pegando a variavel de localhost corretamente
