const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");
db.sequelize.sync();

var corOptions = {
    origin: "http://localhost:8081",
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