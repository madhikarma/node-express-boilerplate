var database = require("../lib/database.js");

getArtists = callback => {
  const connectionPool = database.getConnectionPool();
  const sql = `SELECT * FROM artists`;
  connectionPool.query(sql, (error, artists) => {
    callback(artists, error);
  });
};

module.exports.getArtists = getArtists;
