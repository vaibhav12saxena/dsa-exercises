Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this != "function") throw new Error("not callable");
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

let car1 = {
  color: "red",
  company: "Mahindra",
};

function purchaseCar(price, currency) {
  console.log(`I have ${this.company}, ${this.color},${price},${currency}`);
}

newFunc = purchaseCar.myBind(car1, 2000, "rupee");

newFunc();
