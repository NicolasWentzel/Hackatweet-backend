const mongoose = require('mongoose');

const connectionString ="mongodb+srv://NicolasW:78ahdF1W4BIZoxqP@cluster0.rulszjz.mongodb.net/hackatweet";

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
