const fibonacci = function(n) {
  if (typeof n !== "number") throw new TypeError("Invalid type");
  if (n < 0) throw new RangeError("Invalid range");

  if (n <= 1) return n;
  if (n > 1) return fibonacci(n - 2) + fibonacci(n - 1);
};

module.exports = {
  fibonacci
};
