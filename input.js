// Stores the active TCP connection object.
let connection; 

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //function for users to exit the game
  const handleUserInput = (data) => {
    // WASD Movement binding
    if (data === 'w') {
      connection.write("Move: up");
    } 
    if (data === 'a') {
      connection.write("Move: left");
    } 
    if (data === 'd') {
      connection.write("Move: right"); 
    } 
    if (data === 's') {
      connection.write("Move: down");
    }
    if (data === '\u0003') {
      connection.write("Bye Snek Bye");
      process.exit();
    }
  };

  // handle user input event to exit game
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = { setupInput };