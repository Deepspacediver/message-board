const db = require('./pool');

const getAllMessages = async function () {
    const {rows} = await db.query(`SELECT * FROM user_messages`);
    return rows;
};

const getMessageById = async function (id) {
    const {rows} = await db.query("SELECT * FROM user_messages WHERE id = $1", [id]);
    return rows;
};

const addMessage = async function ({userName, message}) {
    await db.query(`INSERT INTO user_messages (username, message) VALUES ($1, $2)`, [userName, message]);
};


module.exports = {
    getAllMessages,
    getMessageById,
    addMessage
};