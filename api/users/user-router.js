const router = require("express").Router();

const Users = require("./user-model");
const restricted = require("../middleware/restricted-mw");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log("Error...", err);
      res.status(500).json(err);
    });
});

module.exports = router;
