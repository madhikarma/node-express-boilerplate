var mysql = require("mysql");

var connectionPool;
createConnectionPool = () => {
  connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  });
};

getConnectionPool = () => {
  return connectionPool;
};

module.exports.createConnectionPool = createConnectionPool;
module.exports.getConnectionPool = getConnectionPool;
