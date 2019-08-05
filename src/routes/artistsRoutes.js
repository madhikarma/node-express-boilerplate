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

// TODO: nested routes: https://gist.github.com/zcaceres/f38b208a492e4dcd45f487638eff716c

module.exports = router;
