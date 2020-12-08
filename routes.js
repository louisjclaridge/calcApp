let logic = require("./logic");

function coinFlipRoute(request, response) {
  let flip = logic.flipCoin();

  if (flip) {
    response.send("Heads");
  } else {
    response.send("Tails");
  }
}

function addNumbersRoute(request, response)
{
  let requestValues = request.params;
  let result = logic.addNumbers(requestValues.number1, requestValues.number2);
  response.send(result.toString());
}

module.exports.coinFlipRoute = coinFlipRoute;
module.exports.addNumbersRoute = addNumbersRoute;