const { Address, Employee } = require('../models/');

// Versão do Lazy Loading
const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};


/* Função original */
const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
}

/* Método usando Eager Loading
const getById = async (id) => {
  const employee = await Employee.findOne({
      where: { id },
      // include: [{ model: Address, as: 'addresses' }],
      include: [{
        model: Address, as: 'addresses', attributes: { exclude: ['number'] },
      }],
    });
  return employee;
}
*/

module.exports = { getAll, getById };