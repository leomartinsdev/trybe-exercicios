const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (!team) return res.Status(404).json({ message: 'Time não encontrado'});
  next();
};

module.exports = existingId;

/* Original:
const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    return next();
  } else {
    res.sendStatus(404);
  }
};
*/