

const route = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

route.get('/', lesson1Controller.helloRoute);
route.get('/hi', lesson1Controller.hiRoute);
route.get('/good', lesson1Controller.goodRoute);

module.exports = route;