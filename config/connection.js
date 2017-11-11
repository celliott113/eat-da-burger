// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// };

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "bnqg80r3ry4be5nv",
//   password: "avp14ygcbmo2xsz7",
//   database: "s8olknqpg47vlnav"
// });

var connection = mysql.createConnection({
  port: 3306,
  host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "jemw3s9cg2piczpr",
  password: "ky005pyp3iqz8kl7",
  database: "mzi0qo1smzmryxf6"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;