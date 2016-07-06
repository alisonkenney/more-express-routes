var express = require('express');
var app = express();

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/burgers", function (req, res) {
    //send all the burgers     
    res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res) {
    //send all the tacos           
    res.send(tacos.join(", "));
});

//Question 1 - pickacolor
app.get("/pickacolor/:color", function (req, res) {
    var color = (req.params.color);
    res.send("You picked " + color + "!");
});

//Question 4 - burgers and tacos
app.get("/burger/:index", function(req, res){
  var index = req.params.index;
  var burgerType = burgers[index] || "That burger isn't listed.";
  res.send(burgerType);
});

app.get("/taco/:index", function(req, res){
  var index = req.params.index;
  var tacoType = tacos[index] || "That taco isn't listed.";
  res.send(tacoType);
  
});

//Question 3 - pickanumber
app.get("/pickanumber", function (req, res) {
    var number = parseInt(req.query.number);
    var correctAnswer = 7;
    if (number === correctAnswer) {
        res.send("Nailed it!");
    }else if (number < correctAnswer) {
        res.send("Too Low!");
    }else {
        res.send("Too High!");
    }
});

app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});