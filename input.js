// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //function for users to exit the game
  const handleUserInput = (data) => {
    if (data === '\u0003') {
      console.log("Bye Snek Bye");
      process.exit();
    }
  };

  // handle user input event to exit game
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = { setupInput };