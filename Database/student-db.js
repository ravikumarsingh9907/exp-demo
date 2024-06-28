const {MySQLUtils} = require("../Utils");
const TABLE_NAME = 'students';

module.exports = function studentsDb({mysql}) {
    return Object.freeze({
        createStudent,
        getStudents,
    });

    async function createStudent({name, marks, subject, grade}) {
        try {
            const values = [name, marks, subject, grade];
            const query = `INSERT INTO ${TABLE_NAME} (name, marks, subject, grade, created_at)
                                    VALUES (?, ?, ?, ?, NOW());`;
            const result = await mysql.executeQuery({query, values});
            return result.insertId;
        } catch (e) {
            throw e;
        }
    }

    async function getStudents(){
        try {
            const query = `SELECT name, marks, subject FROM ${TABLE_NAME};`;
            return await mysql.executeQuery({query});
        } catch (e) {
            console.error(e);
        }
    }
}