const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");
db.sequelize.sync();

const whiteList = ["http://10.10.90.170:8081", "http://localhost:8081"];
const corOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};

app.use(cors(corOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "가계부 프로젝트",
    });
});

require("./routes/ledger.routes.js")(app);
require("./routes/user.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}!`);
});