// ДЗ №5:

const { interval, range, from, of } = require("rxjs");
const {
  filter,
  bufferCount,
  map,
  every,
  concatMap,
  delay
} = require("rxjs/operators");

// __________
// Задание №1
// Дан обзервер, эмитящий значение инкрементальное через каждые 200 мс. Брать
// только значения которые являются простыми числами. Выдавать суммы каждых двух
// из них в подписчиков как стринги

// Проверка числа на простоту я сделал тоже
// через обзервер.
const primeNum = n => {
  let result = false;
  if (n < 2) return result;
  range(2, Math.floor(Math.pow(n, 0.5)) - 1)
    .pipe(every(val => n % val !== 0))
    .subscribe(val => {
      result = val;
    });
  return result;
};

const observerTask_1 = interval(200)
  .pipe(filter(value => primeNum(value)))
  .pipe(bufferCount(2))
  .pipe(
    map(valArr =>
      Array.from(valArr).reduce((acc, val) => (acc += val).toString())
    )
  );

// __________
// Задание №2
// Дан обсервер массив переданный во from. Выдавать данные по 3 штуки с
// перерывом в 2 секунды
const observerTask_2 = from(["a", "b", "c", "d", "e", "f", "g", "h", "i"])
  .pipe(bufferCount(3))
  .pipe(concatMap(value => of(value).pipe(delay(2000))));

// __________
// ПРОВЕРКА
observerTask_1
  .pipe(map(value => `Sum prime number is\t${value}`))
  .subscribe({ next: console.log });
observerTask_2.subscribe({ next: console.log });
