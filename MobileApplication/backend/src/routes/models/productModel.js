const db = require('../db');

const getProducts = () => {
  const sql = 'SELECT id, name, price FROM products';
  return db.query(sql);
};

module.exports = { getProducts };
