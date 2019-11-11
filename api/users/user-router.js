const router = require('express').Router();

const Users = require('./user-model');
const authMW = require('../middleware/auth-mw');

router.get('/', authMW, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log('Error...', err);
      res.status(500).json(err);
    });
});

module.exports = router;
