const { Address } = require('../models/');

// Essa função só é necessária ao usar o Lazy Loading. O Eager loading resolve tudo no employee.service
const getAllByEmployeeId = async (employeeId) => {
  const addresses = await Address.findAll({ where: { employeeId } });

  return addresses;
};

module.exports = {
  getAllByEmployeeId,
}