var express = require("express");

// Get the port
const PORT = process.env.PORT || 3000;

// Create express server
const server = express();

// *IMPORTANT NOTE* : AWS EB doesn't want us using the .use functions!
// Set up server path information
// These two lines will cause the server to go to __dirname + "/dist" or __dirname + "/public" when a dist or public file is requested
server.use("/dist", express.static("dist/"));
server.use("/public", express.static("public/"));
server.use("/src", express.static("src/"));

// Getting "/"
server.get("/", (req, res) => {
  console.log("GET '/'");
  console.log("\tSending 'index.html' to client.");
  res.sendFile("index.html", { root: __dirname });
});

// Getting "/about"
server.get("/about", (req, res) => {
  console.log("GET '/about'");
  console.log("\tSending 'index.html' to client.");
  res.sendFile("index.html", { root: __dirname });
});


server.listen(PORT, console.log("Server has started on port " + PORT));