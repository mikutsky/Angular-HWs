// ДЗ №5:

const { interval, range, from, of } = require("rxjs");
const {
  bufferCount,
  map,
  mergeMap,
  skipWhile,
  every,
  concatMap,
  delay
} = require("rxjs/operators");

// __________
// Задание №1
// Дан обзервер, эмитящий значение инкрементальное через каждые 200 мс. Брать
// только значения которые являются простыми числами. Выдавать суммы каждых двух
// из них в подписчиков как стринги

const observerTask_1 = interval(200)
  .pipe(skipWhile(value => value < 2))
  .pipe(
    mergeMap(value =>
      range(2, Math.floor(Math.pow(value, 0.5)) - 1).pipe(
        every(divider => value % divider !== 0),
        skipWhile(isPrimeNum => !isPrimeNum),
        map(() => value)
      )
    ),
    bufferCount(2),
    map(value => value.reduce((acc, val) => (acc += val)).toString())
  );

// __________
// Задание №2
// Дан обсервер массив переданный во from. Выдавать данные по 3 штуки с
// перерывом в 2 секунды
const observerTask_2 = from(["a", "b", "c", "d", "e", "f", "g", "h", "i"]).pipe(
  bufferCount(3),
  concatMap(value => of(value).pipe(delay(2000)))
);

// __________
// ПРОВЕРКА
observerTask_1
  .pipe(map(value => `Sum prime number is\t"${value}"`))
  .subscribe({ next: console.log });
observerTask_2.subscribe({ next: console.log });
