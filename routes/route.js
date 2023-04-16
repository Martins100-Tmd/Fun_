//Import Modules
const bodyParser = require("body-parser");
const cors = require("cors");
const { Router } = require("express");
const route = Router();
const DB = require("../Database/db_connect");
const Db_Name = process.env.DATABASE;
let sql;
//@MiddleWares
route.use(cors());
route.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//@get route
route.get("/get", (req, res) => {
  sql = "SELECT * FROM BATMAN";
  DB.all(sql, (err, data) => {
    if (err) return console.log(err);
    console.log(data);
    res.status(200).json({ success: true, data });
  });
});

route.post("/post", (req, res) => {
  let { name, email } = req.body;
  console.log(name, email, req.body);
  sql = "INSERT INTO BATMAN(name, email) VALUES(?, ?)";
  DB.run(sql, [name, email], (err) => {
    if (err) {
      res.status(401).json({ success: false });
      return console.log(err);
    } else {
      res.status(401).json({ success: false, name, email });
    }
  });
});

module.exports = route;
