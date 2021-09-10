module.exports = app => {
    const ledgers = require("../controllers/ledger.controller.js");

    const router = require("express").Router();

    router.post("/", ledgers.create);
    router.get("/", ledgers.findAll);
    router.post("/update/:id", ledgers.update);
    router.post("/delete/:id", ledgers.delete);
    router.get("/:userId", ledgers.findLedger);
    router.get("/:userId/:date", ledgers.findDateLedger);

    app.use("/api/ledger", router);
}