module.exports = app => {
    const ledgers = require("../controllers/ledger.controller.js");
    const users = require("../controllers/user.controller.js");

    const router = require("express").Router();

    router.post("/ledgers", ledgers.create);
    router.get("/ledgers", ledgers.findAll);
    router.get("/ledgers/:userId", ledgers.findUserLedger);
    router.post("/ledgers/update/:id", ledgers.update)
    router.post("/users", users.create);

    app.use("/api", router);
}