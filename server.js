const http = require('http');
const app = require('./app');
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 3004;
const path = require("path")


// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Creating the server
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });