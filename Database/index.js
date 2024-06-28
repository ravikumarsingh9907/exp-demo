const config = require('../config');
const {MySQLUtils} = require('../Utils');

const mysql = new MySQLUtils({
    database: config.mysql.database,
    user: config.mysql.user,
    pass: config.mysql.password,
    host: config.mysql.host,
    port: config.mysql.port,
    poolSize: 10,
});

const makeStudentsDb = require('./student-db');
const studentsDb = makeStudentsDb({mysql});

module.exports = {
    studentsDb,
};