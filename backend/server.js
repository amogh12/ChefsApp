const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require('./routes/api/users');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
const items = require('./routes/api/items');

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//routes setup
app.use('/api/items', items);
app.use('/api/users', users);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on  ${port}`));
