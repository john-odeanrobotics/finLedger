module.exports = app => {
    const users = require("../controllers/user.controller.js");

    const router = require("express").Router();

    router.post("/", users.create);
    router.get("/", users.findAll);
    router.post("/update/:id", users.update);
    router.post("/delete/:id", users.delete);

    app.use("/api/user", router);
}