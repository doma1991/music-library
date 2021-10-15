const mysql = require ('mysql2/promise')

const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env


module.exports = async()=>{
    const connection = await mysql.createConnection({
        host: DB_HOST,
        password:DB_PASSWORD,
        port:DB_PORT,
        user:DB_USER,
        database:DB_NAME
    })
    return connection
}