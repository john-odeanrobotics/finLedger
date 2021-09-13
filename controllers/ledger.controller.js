const db = require("../models");
const Ledger = db.ledger;
const User = db.user;

exports.create = (req, res) => {
    if (!req.body.date || !req.body.tag || !req.body.memo || !req.body.amount || req.body.isIncome === null || !req.body.userId) {
        res.status(400).send({
            message: "Contents is empty."
        });
        return;
    };  
    if (req.body.amount === 0 || typeof(req.body.amount) !== "number") {
        res.status(400).send({
            message: "Enter only numbers except zero for the amount."
        });
        return;
        
    }


    console.log(req.body)
    const ledger = {
        date: req.body.date,
        tag: req.body.tag,
        memo: req.body.memo,
        amount: req.body.amount,
        isIncome: req.body.isIncome,
        userId: req.body.userId,
    }

    Ledger.create(ledger)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error occurred while creating the ledger.",
            });
        });
}

exports.findAll = (req, res) => {
    Ledger.findAll({
        include: [{ model: User, as: "user", attributes: ["id", "uid"] }],
        order: [
            ["date", "desc"],
            ["id", "desc"]
        ],
        attributes: { exclude: ["userId", "createdAt", "updatedAt"] }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error occurred while retrieving ledgers.",
            });
        });
}

exports.findLedger = (req, res) => {
    const userId = req.params.userId;

    Ledger.findAll({
        include: [{ model: User, as: "user", attributes: ["id", "uid"] }],
        where: { userId: userId },
        order: [
            ["date", "desc"],
            ["id", "desc"]
        ],
        attributes: { exclude: ["userId", "createdAt", "updatedAt"] }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error occurred while retrieving ledgers.",
            })
        })
}

exports.findDateLedger = (req, res) => {
    const userId = req.params.userId;
    const date = req.params.date;

    Ledger.findAll({
        include: [{ model: User, as: "user", attributes: ["id", "uid"] }],
        where: { 
            userId: userId,
            date: date,
        },
        order: [
            ["date", "desc"],
            ["id", "desc"]
        ],
        attributes: { exclude: ["userId", "createdAt", "updatedAt"] }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error occurred while retrieving ledgers.",
            });
        });
}

exports.update = (req, res) => {{
    const id = req.params.id;

    Ledger.update(req.body, {
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ledger was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Ledger whit id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `error updating Ledger with id=${id}`
            });
        });
}}

exports.delete = (req, res) => {
    const id = req.params.id;

    Ledger.destroy({
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ledger was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Ledger whit id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `error destroying Ledger with id=${id}`
            });
        });
}

exports.deleteAll = (req, res) => {
    const userId = req.params.userId;

    Ledger.destroy({
        where: { userId: userId },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ledger was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Ledger whit id=${userId}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `error destroying Ledger with id=${id}`
            });
        });
}