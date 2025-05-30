Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this != "function") throw new Error("this is not a function");
  context.fn = this;
  context.fn(...args);
};

let car1 = {
  color: "red",
  company: "Mahindra",
};

function purchaseCar(price, currency) {
  console.log(`I have ${this.company}, ${this.color},${price},${currency}`);
}

purchaseCar.myApply(car1, [2000, "rupee"]);
