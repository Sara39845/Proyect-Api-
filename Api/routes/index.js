const express = require('express');

const productRouter = require("./products.router");
const categoriesRouter = require("./categories.router");
const usersRouter = require("./users.router");

function routerApi(app) {
    const router = express.Router();
    app.use('/Api/v1', router);
    router.use("/products", productRouter);
    router.use("/users", usersRouter);        // Cambiado a usersRouter
    router.use("/categories", categoriesRouter); // Cambiado a categoriesRouter
}

module.exports = routerApi;