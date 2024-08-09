require('dotenv').config();

module.exports = {
  development : {
    host: process.env.HOST,
    username: process.env.NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dialect: "mysql"
  }
}