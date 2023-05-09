/** Database for lunchly */

const {Client} = require("pg");

const db = new Client({
    host:'localhost',
    user:'livin',
    port:'5432',
    password:'rootUser',
    database:'lunchly'
});

db.connect();

module.exports = db;
