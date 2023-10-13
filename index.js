const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./src/config/Database');
const router = require('./src/routes/index');

dotenv.config();
const app = express();

const connect = async () => {
  try {
    await db.authenticate();
    console.log('Database connected...');
  }
  catch (error) {
    console.error(error);
  }
};

app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('Server running at port 5000'));

connect();
