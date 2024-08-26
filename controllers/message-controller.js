const asyncHandler = require("express-async-handler");
const messageQueries = require("../db/queries");

const postMessage = asyncHandler(async (req, res) => {
    const {message, userName} = req.body;
    await messageQueries.addMessage({userName, message});
    // messages.push({user: userName, text: message, added: new Date(), id: randomUUID()});
    return res.redirect('/');
});

const getMessage = asyncHandler(async (req, res) => {
    const messageId = req.params.messageId;
    const [message] = await messageQueries.getMessageById(messageId);
    if (!message) {
        return res.status(404).send('Not Found');
    }
    return res.render(`message/opened-message`, {message: message});

});

module.exports = {postMessage, getMessage};
