var database = require("../lib/database.js");

getArtists = callback => {
  const connection = database.createConnection();
  const sql = `SELECT * FROM artists`;
  connection.query(sql, (error, artists) => {
    callback(artists, error);
  });
};

getArtist = (id, callback) => {
  const connection = database.createConnection();
  const sql = `SELECT * FROM artists WHERE id = ${id}`;
  connection.query(sql, (error, artists) => {
    callback(artists[0], error);
  });
};

module.exports.getArtists = getArtists;
