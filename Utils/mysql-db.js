const mysql = require('mysql2/promise');

class MySQLUtils {
    constructor({database, host, port, poolSize, user, pass}) {
        this.defaultDatabase = database;

        this.mysqlPool = mysql.createPool({
            host: host,
            port: port,
            connectionLimit: poolSize,
            user: user,
            password: pass,
            database: database,
        });
    }

    async getSqlConnection({database}) {
        const connection = await this.mysqlPool.getConnection();
        await connection.query(`USE ${database ? database : this.defaultDatabase}`);
        return connection;
    }

    async executeQuery({database, query, values}) {
        let connection;
        try {
            connection = await this.getSqlConnection({database});
            const [results] = await connection.query(query, values);
            return results;
        } catch (e) {
            throw e;
        } finally {
            if(connection) {
                connection.release();
            }
        }
    }
}

module.exports = MySQLUtils;