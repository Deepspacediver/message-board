const {Router} = require('express');
const asyncHandler = require('express-async-handler');
const {getMessage} = require('../controllers/message-controller');

const messageRouter = Router();

messageRouter.get('/:messageId', getMessage);

module.exports = {messageRouter};