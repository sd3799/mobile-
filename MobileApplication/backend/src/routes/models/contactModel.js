const db = require('../db');

const saveContact = async (name, email, mobile, message) => {
  const sql = 'INSERT INTO contacts (name, email, mobile, message) VALUES (?, ?, ?, ?)';
  await db.execute(sql, [name, email, mobile, message]);
};

module.exports = { saveContact };
