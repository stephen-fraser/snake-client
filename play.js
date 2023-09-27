const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50541, // PORT number here,
    host: "165.227.47.243" // IP address here,
  });

  // Event Handler for connect
  conn.on("connect", (data) => { 
    console.log("Successful connection to snek");
  });

  // Event Handler for getting booted
  conn.on("data", (data) => {
    console.log("you ded cuz you idled");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();