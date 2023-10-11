const express = require('express');
const Auth = require('../controllers/Auth');
const Token = require('../middleware/Token');
const Users = require('../controllers/Users');

const router = express.Router();

router.get('/token', Auth.token);

router.get('/users', Token.verify, Users.list);
router.post('/users/register', Users.register);
router.post('/users/login', Users.login);
router.delete('/users/logout', Users.logout);

module.exports = router;
