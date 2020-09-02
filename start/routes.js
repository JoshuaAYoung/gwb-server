"use strict";

const Route = use("Route");
const Paint = use("App/Models/Paint");

Route.get("/api/paints", async ({ response }) => {
  let paints = await Paint.all();
  return response.json(paints);
});
