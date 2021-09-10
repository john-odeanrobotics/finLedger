const db = require("../models");
const User = db.user;

exports.create = (req, res) => {
    if (!req.body.uid || !req.body.password) {
        res.status(400).send({
            message: "Contents is empty."
        });
        return;
    };

    const user = {
        uid: req.body.uid,
        password: req.body.password,
    }

    console.log(req.body)

    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error occurred while creating the user.",
            });
        });
}

exports.findAll = (req, res) => {
    User.findAll({
        order: [["id", "asc"]]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error occurred while retrieving users.",
            });
        });
}

exports.update = (req, res) => {{
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update User whit id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `error updating User with id=${id}`
            });
        });
}}

exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete User whit id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `error destroying User with id=${id}`
            });
        });
}