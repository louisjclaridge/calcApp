let express = require("express");
let routes = require("./routes");

let app = express();

// Comment
app.get("/flip", routes.coinFlipRoute);
app.get("/add/:number1/:number2", routes.addNumbersRoute);

app.listen(9000, function() {console.log("Listening on " + 9000);});

module.exports.app = app;