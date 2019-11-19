const {
  assert: { equal, throws }
} = require("chai");
const { fibonacci } = require("../src/fibonacci");

test("Test fibonacci. Input 0. Expected 0.", () => {
  const input = 0;
  const expected = 0;

  const actualResult = fibonacci(input);
  equal(actualResult, expected, "Incorrect fibonacci calculation");
});

test("Test fibonacci. Input 1. Expected 1.", () => {
  const input = 1;
  const expected = 1;

  const actualResult = fibonacci(input);
  equal(actualResult, expected, "Incorrect fibonacci calculation");
});

test("Test fibonacci. Input 2. Expected 1.", () => {
  const input = 2;
  const expected = 1;

  const actualResult = fibonacci(input);
  equal(actualResult, expected, "Incorrect fibonacci calculation");
});

test("Test fibonacci. Input 3. Expected 2.", () => {
  const input = 3;
  const expected = 2;

  const actualResult = fibonacci(input);
  equal(actualResult, expected, "Incorrect fibonacci calculation");
});

test("Test fibonacci. Input 11. Expected 89.", () => {
  const input = 11;
  const expected = 89;

  const actualResult = fibonacci(input);
  equal(actualResult, expected, "Incorrect fibonacci calculation");
});

test("Test fibonacci. Input 20. Expected 6765.", () => {
  const input = 20;
  const expected = 6765;

  const actualResult = fibonacci(input);
  equal(actualResult, expected, "Incorrect fibonacci calculation");
});

test("Test fibonacci. Input -1. Expected invalid value range error", () => {
  const input = -1;
  throws(() => fibonacci(input), "Invalid range");
});

test("Test fibonacci. Input 'string'. Expected invalid type error", () => {
  const input = "string";
  throws(() => fibonacci(input), "Invalid type");
});
