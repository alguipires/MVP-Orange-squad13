import app from "./app.js"

const port = process.env.API_PORT || 3001;

app.listen(port, () => {
  console.log('Servidor escutando na porta', port);
});