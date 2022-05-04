import mysql from 'mysql2';
import credentials from './credentials.js';

 const connection = mysql.createConnection({
    host: "localhost",
    database: "fosterPetDb",
    ...credentials
}).promise();

export default connection;