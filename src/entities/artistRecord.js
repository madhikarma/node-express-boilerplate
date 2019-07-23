var database = require("../lib/database.js");

getArtists = callback => {
  const connectionPool = database.getConnectionPool();
  connectionPool.getConnection((connectionError, connection) => {
    if (connectionError) {
      console.log(connectionError);
    }
    const sql = `SELECT * FROM artists`;
    connection.query(sql, (error, artists) => {
      callback(artists, error);
    });
  });
};

getArtist = (id, callback) => {
  const connectionPool = database.getConnectionPool();
  connectionPool.getConnection((erroconnectionErrorr, connection) => {
    if (connectionError) {
      console.log(connectionError);
    }
    const sql = `SELECT * FROM artists WHERE id = ${id}`;
    connectionPool.query(sql, (error, artists) => {
      callback(artists[0], error);
    });
  });
};

module.exports.getArtists = getArtists;
