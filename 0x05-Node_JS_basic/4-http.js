const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send response body
  res.end('Hello Holberton School!\n');
});

// Make the app listen on port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

// Export the app for use in other modules if necessary
module.exports = app;
