class AppController {
  getHTTPStatus(result, error, method) {
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
  }

  sendResponse(response, status, body) {
    response.setHeader("Content-Type", "application/json");
    response.status(status);
    response.json(body);
  }
}
module.exports = {
  AppController: AppController
};
