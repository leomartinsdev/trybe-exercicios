const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization.length !== 16 || !authorization) return res.status(401)
    .json({ message: 'Token inválido' });

  next();
};

module.exports = auth;
