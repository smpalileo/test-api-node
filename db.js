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
  }
  
}

module.exports = db;