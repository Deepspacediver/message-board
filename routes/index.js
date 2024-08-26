const {Router} = require('express');
// const {randomUUID} = require('crypto');
const messagesQueries = require("../db/queries");

const indexRouter = Router();

// const messages = [
//     {
//         text: "Hi there!",
//         user: "Amando",
//         added: new Date(),
//         id: randomUUID()
//     },
//     {
//         text: "Hello World!",
//         user: "Charles",
//         added: new Date(),
//         id: randomUUID()
//     }
// ];

indexRouter.get('/', async (req, res) => {
    console.log('called');
    const messages = await messagesQueries.getAllMessages();
    res.render('message/messages', {messages: messages});
    res.end();
});

module.exports = {indexRouter};
