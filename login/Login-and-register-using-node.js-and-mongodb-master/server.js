const RegisterController = require('./Controllers/RegisterController');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.vars/.env' });

const RegisterRouter = require('./Routes/registerRoute');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.set('strictQuery', true);

console.log('MongoDB Connection String:', process.env.LINK);

mongoose.connect(process.env.LINK)
  .then(() => {
    console.log('connected with mongoose');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

app.use('/App', RegisterRouter);
app.use(express.static('./Public'));

app.listen(2000, () => {
  console.log('The server has been started on port 2000');
});
