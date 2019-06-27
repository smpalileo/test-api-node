const mysql = require( 'mysql' );

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
});

const db = {
  query( sql, args ) {
    return new Promise( ( resolve, reject ) => {
      connection.query( sql, args, ( err, rows ) => {
        if ( err )
          return reject( err );
        resolve( rows );
      } );
    } );
  },
  close() {
    return new Promise( ( resolve, reject ) => {
      connection.end( err => {
        if ( err )
          return reject( err );
        resolve();
      });
    });
  },

  createDb() {
    return new Promise( ( resolve, reject ) => {
      connection.query("CREATE DATABASE IF NOT EXISTS mydb", ( err => {
        if ( err )
          return reject( err );
        // console.log("Database created");
        resolve();
      }));
    });
  },

  createMoviesTable() {
    return new Promise( ( resolve, reject ) => {
      connection.query(`
        CREATE TABLE IF NOT EXISTS
        movies
        (
            id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
            title VARCHAR(255) NOT NULL,
            year INT NOT NULL,
            rating VARCHAR(255) NOT NULL
        )
      `, ( err => {
        if ( err )
          return reject( err );
        // console.log("Movies table created");
        resolve();
      }));
    });
  },


  createUsersTable() {
    return new Promise( ( resolve, reject ) => {
      connection.query(`
        CREATE TABLE IF NOT EXISTS
        users
        (
            username VARCHAR(255) UNIQUE PRIMARY KEY NOT NULL,
            password TEXT NOT NULL
        )
        `, ( err => {
        if ( err )
          return reject( err );
        // console.log('Users table created');
        resolve();
      }));
    });
  }
  
}

module.exports = db;