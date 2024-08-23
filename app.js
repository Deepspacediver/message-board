const express = require('express');
const path = require("path");
const formRouter = require("./routes/message-form-router");
const {indexRouter} = require("./routes/index");
const {messageRouter} = require('./routes/message-router');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/new', formRouter);
app.use('/message', messageRouter);


// const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, "0.0.0.0");

