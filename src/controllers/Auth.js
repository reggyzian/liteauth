const jwt = require('jsonwebtoken');
const Users = require('../models/UserModel');

const token = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) return res.sendStatus(401);

    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken
      }
    });
    if (!user[0]) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err) => {
      if (err) return res.sendStatus(403);
      const userId = user[0].id;
      const { name } = user[0];
      const { email } = user[0];
      const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15s'
      });

      return res.json({ accessToken });
    });

    return undefined;
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};

module.exports = {
  token
};
