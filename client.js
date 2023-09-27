const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: PORT, // PORT number here,
    host: IP // IP address here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // name 
  conn.write("Name: Dad")

  // Event Handler for connect
  conn.on("connect", (data) => { 
    console.log("Successful connection to snek");
  });


  // Event Handler for game messages (idel, crashing etc)
  conn.on("data", (message) => {
    console.log(message);
  });

  return conn;
};


module.exports = { connect };