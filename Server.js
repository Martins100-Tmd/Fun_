//import modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const App = express();
require("dotenv").config({ path: "./.env", debug: true });
const [Port] = [process.env.PORT];
//App Static
App.use(express.static(__dirname + "/Static/Index.html"));
//App middlewares
App.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
App.use(cors());
App.use(
  express.json({
    limit: "100mb",
  })
);

//Api routes
App.use("/api", require("./routes/route"));

//App listening
App.listen(Port, () => {
  console.log("Serving is running on Port " + Port);
});
