require('dotenv').config();

const app = require('./app');

const port = process.env.API_PORT;

app.listen(port, () => {
  console.log('Servidor escutando na porta', port);
});
