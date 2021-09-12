const mysql = require('mysql2/promise');
const path = require('path');
const args = process.argv.slice(2)[0];
const envFile = args === 'test' ? '../.env.test' : '../.env';
require('dotenv').config({
  path: path.join(__dirname, envFile),
});



const {DB_USER, DB_NAME,DB_PORT, DB_PASSWORD, DB_HOST} = process.env


const setUpConnection = async () => {


try {
    const db = await mysql.createConnection({
        host: DB_HOST,
        password:DB_PASSWORD,
        user:DB_USER,
        database:DB_NAME,
        port:DB_PORT

    })
    await db.query(`DROP DATABASE ${DB_NAME}`)
    await db.end()
    
} catch (error) {
    console.log(error)
    
}

  
}
setUpConnection()