const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (req, res) => res.status(200).json({ message: 'Olá, Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  //  Verifica se já existe o time
  const updateTeam = teams.find((team) => team.id === Number(id));

  //  Se o time não existe retorna essa mensagem
  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }

  //  Se o time existe, atualiza os dados
  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ team: updateTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));

  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;