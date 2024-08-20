const asyncHandler = require("express-async-handler");
const {messages} = require('../routes/index');
const {randomUUID} = require('crypto');

//
const postMessage = asyncHandler(async (req, res) => {
    const {message, userName} = req.body;
    messages.push({user: userName, text: message, added: new Date(), id: randomUUID()});
    return res.redirect('/');
});

const getMessage = asyncHandler(async (req, res) => {
    const messageId = req.params.messageId;
    const message = await messages.find((message) => message.id === messageId);
    if (!message) {
        return res.status(404).send('Not Found');
    }
    return res.render(`message/opened-message`, {message: message});

});

module.exports = {postMessage, getMessage};
