// string type variable
var bottle = "water";
var bottleColor = "yellow";
var penColor = "blue";

//number type variable
var bottlePrice = 500;
var sunglassPrice = 120;

//Boolean type variable
var isExpensive = true;

// checking the javascript variable data type
console.log(typeof isExpensive);

//array
//var itemsOnTable = [10, 20, 30, 40, 50];
var itemsOnTable = ["bottle", "pen", "mouse", "sunglass", "paper"];

var item3 = itemsOnTable[3];
itemsOnTable[4] = "nootbook";

var penIndex = itemsOnTable.indexOf("pen");

// push, pop

// conditionals
if (itemsOnTable.length > 4) {
  console.log("found");
} else if (itemsOnTable[3] == "pen") {
  console.log("pen found");
} else {
  console.log("nothing found");
}
