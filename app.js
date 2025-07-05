import mysql from "mysql2/promise";

//? 1: to connect at mysql server

const db = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sagar",
    database:"mysql_db"
})
console.log("My sql connected Successfully");

//? 2: we need to create a database

// await db.execute(`create database mysql_db`); //TODO we can create database like this
// console.log(await db.execute('show databases')); //TODO  this is is to execute the sql query ,write {db.execute('sql_query_goes_here')}

//? 3: then we to create a table

// await db.execute(`
//     CREATE TABLE users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         username VARCHAR(100) NOT NULL,
//         email VARCHAR(100) NOT NULL UNIQUE
//     );
//     `)
// console.log("Table created successfull!");

//? 4: is to perform CRUD operation
//! INSERT 
//! Single Insertion

//! Using Inline Values (Not Recommented)
// await db.execute(`
//     INSERT INTO users(username,email) VALUES('vinod','vinod@gmail.com');
// `)
// console.log('Inserted successfully!');

//* Using Prepared Statements (Best Practice)
// await db.execute(`
//     INSERT INTO users(username,email) VALUES(?,?)
// `,[
//     "kiran",
//     "kiran@gmail.com"
//   ]
// )
//! Multiple Insertion
// const values = [
//     ["alice","alice@gmail.com"],
//     ["bob","bob@gmail.com"],
//     ["charlie","charlie@gmail.com"],
//     ["david","david@gmail.com"],
//     ["emma","emma@gmail.com"],
// ];
// await db.query(`INSERT INTO users(username,email) VALUES ?`,[values]); //! dont user parenthesis {VALUES(?)✖  VALUES ? ✔} also use db.query not db.execute
//! READ

// const [rows] = await db.execute(`
//     SELECT * FROM users
// `);
const [rows] = await db.execute(`
    SELECT * FROM users WHERE username="emma"
`);
console.log(rows);

// output : [
//   [ { id: 1, username: 'vinod', email: 'vinod@gmail.com' } ],
//   [
//     `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     `username` VARCHAR(100) NOT NULL,
//     `email` VARCHAR(100) NOT NULL UNIQUE_KEY
//   ]
// ]

//! UPDATE