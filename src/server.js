// Imports
const database = require("./lib/database.js");
const express = require("express");
const { ArtistsController } = require("./controllers/artistsController.js");

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
app.get("/artists", (request, response) => {
  const artistsController = new ArtistsController();
  artistsController.getAll(request, response);
});

app.post("/artists", (request, response) => {
  const artistsController = new ArtistsController();
  const artist = { name: request.body.name };
  artistsController.create(artist, request, response);
});

const server = app.listen(process.env.PORT || "3000", () => {
  console.log("App listening on port %s", server.address().port);
  console.log("Press Ctrl+C to quit");
  database.createConnectionPool();
});
