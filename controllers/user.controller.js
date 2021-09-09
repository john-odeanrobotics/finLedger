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