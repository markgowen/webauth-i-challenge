const bcrypt = require('bcryptjs');
const router = require('express').Router();

const authRouter = require('./auth/auth-router');
const userRouter = require('./users/user-router');

server.use(('/auth', authRouter));
server.use(('/users', userRouter));

router.get('/', (req, res) => {
    res.json({ api: "Api is running..."})
});

module.exports = router;