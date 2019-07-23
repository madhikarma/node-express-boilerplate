var mysql = require("mysql");

createConnection = () => {
  const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  });
  return connection;
};

connect = callback => {
  const connection = createConnection();
  connection.connect(error => {
    callback(error);
  });
};

module.exports.createConnection = createConnection;
module.exports.connect = connect;
