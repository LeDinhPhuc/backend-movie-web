const express = require('express');
const userRouter = require('./routers/user');

const app = express();

app.use(express.json());
app.use('/api/users', userRouter);

module.exports = app;
