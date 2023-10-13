const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');
const Users = require('../models/UserModel');

const list = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'name', 'email', 'authAt', 'createdAt', 'updatedAt']
    });
    res.json(users);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

const register = async (req, res) => {
  const {
    name, email, password, passwordConfirm
  } = req.body;

  try {
    const loadUser = await Users.findOne({
      where: {
        email
      }
    });

    if (loadUser) {
      return res.status(400).json({ msg: 'Email already exists' });
    }

    if (password !== passwordConfirm) {
      return res.status(400).json({ msg: 'Password and confirmation do not match' });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    await Users.create({
      name,
      email,
      password: passwordHash
    });
    return res.json({ msg: 'Register success' });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email
      }
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: 'Wrong password' });

    const userId = user[0].id;
    const { name } = user[0];
    const { email } = user[0];

    const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '20s'
    });
    const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d'
    });

    await Users.update({
      refresh_token: refreshToken,
      authAt: Sequelize.fn('NOW')
    }, {
      where: {
        id: userId
      }
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
    });

    return res.json({ accessToken });
  }
  catch (error) {
    console.log(error);
    return res.status(404).json({ msg: 'User not found' });
  }
};

const logout = async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.sendStatus(204);

  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken
    }
  });
  if (!user[0]) return res.sendStatus(204);

  const userId = user[0].id;
  await Users.update({
    refresh_token: null
  }, {
    where: {
      id: userId
    }
  });

  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};

module.exports = {
  list,
  register,
  login,
  logout
};
