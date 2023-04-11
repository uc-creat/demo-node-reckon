const express = require('express');

const app = express();

const demoRouter = require('./routes/demoRoutes');

app.use(express.json())
app.use('/',demoRouter);

module.exports = app;

// you need to create a structure of your application ->
// req --> middleware --> res