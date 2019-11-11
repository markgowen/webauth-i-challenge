const db = require('../db/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById
};

function find() {
  return db('users').where('user_id', 'username');
}

function findBy(filter) {
  return db('users').where(filter);
}

function insert(user) {
  return db('users')
    .insert(user, 'user_id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(user_id) {
  return db('users')
    .select('user_id', 'username')
    .where({ user_id })
    .first();
}
