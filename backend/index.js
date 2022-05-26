require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

const app = express();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connection Successful!'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000 :)');
});
