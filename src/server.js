const express = require("express");
const database = require("./lib/database.js");
const { ArtistsController } = require("./controllers/artistsController.js");
const artistsRoutes = require("./routes/artistsRoutes.js");

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
app.use("/artists", artistsRoutes);

const server = app.listen(process.env.PORT || "3000", () => {
  console.log("App listening on port %s", server.address().port);
  console.log("Press Ctrl+C to quit");
  database.createConnectionPool();
});
