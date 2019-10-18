const { interval } = require("rxjs");

interval(200)
  .filter(value => true)
  .subscribe({ next: console.log });
