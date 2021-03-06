const express = require('express');
const app = express.Router();
const controller = require('../controllers/package');
const isAuth = require('../middlewares//auth');

app.get('/search/:value', isAuth, controller.search);
app.get('/get', isAuth, controller.get);
app.get('/count', isAuth, controller.count);
app.post('/create', isAuth, controller.create);
app.delete('/delete/:id', isAuth, controller.delete);

module.exports = app;