const express = require("express");
const db_con = require("./sqlconnection");
var usersRouter = require('./isp');

const app = express();

app.listen(3000, () => {
console.log(`Server is up and running on 3000 ...`);
});

app.use('', usersRouter);
