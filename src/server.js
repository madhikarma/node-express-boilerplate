// Imports
const express = require("express");
var database = require("./lib/database.js");
var artistRecord = require("./entities/artistRecord.js");

// Setup
const app = express();
app.use(express.json());
app.set("json spaces", 2);

if (process.env.NODE_ENV === "dev") {
  app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "http://localhost:8080");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
}

// Routes
app.get("/", (request, response) => {
  artistRecord.getArtists((artists, error) => {
    const status = getHTTPStatus(artists, error, "GET");
    sendResponse(response, status, artists);
  });
});

// Helpers
getHTTPStatus = (result, error, method) => {
  if (error) {
    return 500;
  }
  let status = 200;
  switch (method) {
    case "POST":
      status = 201;
      break;
    case "GET":
      if (!result) {
        status = 404;
      } else if (Array.isArray(result) && result.length == 0) {
        status = 204;
      }
      break;
    default:
      break;
  }
  return status;
};

sendResponse = (response, status, body) => {
  response.setHeader("Content-Type", "application/json");
  response.status(status);
  response.json(body);
};

const server = app.listen(process.env.PORT || "3000", () => {
  console.log("App listening on port %s", server.address().port);
  console.log("Press Ctrl+C to quit");
  database.createConnectionPool();
});
