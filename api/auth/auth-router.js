const bcrypt = require("bcryptjs");

const router = require("express").Router();

const Users = require("../users/user-model");

router.post("/register", (req, res) => {
  let userInfo = req.body;

  bcrypt.hashSync(userInfo.password, 12, (err, hashedPassword) => {
    userInfo.password = hashedPassword;

    Users.insert(userInfo)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(err => {
        console.log("Error", err);
        res.status(500).json(err);
      });
  });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.username = user.username;
        res.status(200).json({ message: `Logged in ${user.user_id}` });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(err => {
      console.log("Error...", err);
      res.status(500).json(err);
    });
});

module.exports = router;
