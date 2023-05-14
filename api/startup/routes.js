const express = require("express");
const cors = require("cors");
const authRouter = require("../routes/auth");
const userRouter = require("../routes/user");
const productsRouter = require("../routes/product");
const ordersRputer = require("../routes/order");
const cartRoute = require("../routes/cart");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/products", productsRouter);
  app.use("/api/orders", ordersRputer);
  app.use("/api/carts", cartRoute);
};
