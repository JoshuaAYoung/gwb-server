"use strict";

const Paint = use("App/Models/Paint");

class PaintController {
  async index({ request, response, view }) {
    let paints = await Paints.query().fetch();
    return response.json(paints);
  }
}

module.exports = PaintController;
