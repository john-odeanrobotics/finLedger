module.exports = app => {
    const users = require("../controllers/user.controller.js");

    const router = require("express").Router();

    router.post("/", users.create);
    router.get("/", users.findAll);
    router.post("/signin", users.signIn)
    router.post("/update/:id", users.update);
    router.post("/delete/:id", users.delete);
    router.post("/deleteAll", users.deleteAll);

    app.use("/api/user", router);
}