function Raindrops() {
  this.convert = function (number) {
    var result = "";
    if (number % 3 === 0) result += "Pling";
    if (number % 5 === 0) result += "Plang";
    if (number % 7 === 0) result += "Plong";
    return result || number.toString();
  };
}
