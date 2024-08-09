require('dotenv').config();

const config = {
    mysql : {
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.NAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        poolSize: 20,
    }
}

module.exports = config;