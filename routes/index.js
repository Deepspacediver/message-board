const {Router} = require('express');
const {randomUUID} = require('crypto');

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        id: randomUUID()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        id: randomUUID()
    }
];

indexRouter.get('/', (req, res) => {
    res.render('message/messages', {messages: messages});
});

module.exports = {indexRouter, messages};
