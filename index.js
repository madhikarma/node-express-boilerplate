// Imports
const express = require("express");
var database = require("./src/lib/database.js");
var artistRecord = require("./src/entities/artistRecord.js");

// Setup
const app = express();
app.use(express.json());
app.set("json spaces", 2);

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
