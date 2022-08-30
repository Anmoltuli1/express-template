const express = require("express");
const test = require("../routes/test");
const pagesRoutes = require("../routes/pagesRoutes");
const quotationRoutes = require("../routes/quotationRoutes")

module.exports = function (app) {
  app.use(express.json());
  // app.use(setCache);
  app.use(express.static("media"));

  app.use("/api/pages", pagesRoutes);
  app.use("/api/quotation", quotationRoutes);
};
