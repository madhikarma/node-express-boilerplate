const express = require("express");
const { ArtistsController } = require("../controllers/artistsController.js");

const router = express.Router();

router.get("/", (request, response) => {
  const artistsController = new ArtistsController();
  artistsController.getAll(request, response);
});

router.post("/", (request, response) => {
  const artistsController = new ArtistsController();
  const artist = { name: request.body.name };
  artistsController.create(artist, request, response);
});

module.exports = router;
