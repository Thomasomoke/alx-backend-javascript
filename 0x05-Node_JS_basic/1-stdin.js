const readline = require('readline');

/**
 * Starts the program to read user input.
 */
function startProgram() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Welcome to Holberton School, what is your name?');

  rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close(); // Close the interface after receiving input
  });

  rl.on('close', () => {
    console.log('This important software is now closing');
  });
}

// Export the function
module.exports = startProgram;

// If the file is run directly, execute the function
if (require.main === module) {
  startProgram();
}
