const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');


app.use(cors());


require("./db/connection");


app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(require('./routes/user'));
app.use(require('./routes/todo'));


app.listen(5000, () => {
    console.log(`Listening to port 5000`);
})