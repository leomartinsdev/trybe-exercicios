const express = require('express');
require('express-async-errors'); // não precisa definir uma variável
const morgan = require('morgan');
const teamsRouter = require('./routes/teamsRouter')

const app = express();
app.use(morgan('dev'));
app.use(express.json());
// Monta o router na rota /teams
app.use('/teams', teamsRouter);

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;