const database = require("../lib/database.js");
const { AppController } = require("./appController.js");

class ArtistsController extends AppController {
  getAll(request, response) {
    /*
    const connectionPool = database.getConnectionPool();
    const sql = `SELECT * FROM artists`;
    connectionPool.query(sql, (error, artists) => {
      const status = super.getHTTPStatus(artists, error, "GET");
      super.sendResponse(response, status, artists);
    });
     */
    super.sendResponse(response, 200, []);
  }

  validate(artist) {
    return artist.name !== undefined && artist.name !== null;
  }

  create(artist, request, response, next) {
    /*
    const isValid = this.validate(artist);
    if (!isValid) {
      super.sendResponse(response, 400, {
        error: { description: "Could not create resource, validation failed" }
      });
      return;
    }
    const connectionPool = database.getConnectionPool();
    const sql = `INSERT INTO artists (name) VALUES ('${artist.name}')`;
    connectionPool.query(sql, (error, result) => {
      const status = super.getHTTPStatus(result, error, "POST");
      super.sendResponse(response, status, {});
    });
    */
    super.sendResponse(response, 201, {});
  }
}
module.exports = {
  ArtistsController: ArtistsController
};
