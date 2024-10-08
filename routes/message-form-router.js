const {Router} = require('express');
const messageFormController = require('../controllers/message-controller');

const formRouter = Router();

formRouter.get('/', (req, res) => {
    res.render('message/form');
}).post('/', messageFormController.postMessage);

module.exports = formRouter;