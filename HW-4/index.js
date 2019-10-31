// ДЗ №4:

// Что бы отделить результаты выполнения заданий я их обернул в функции
// `task${номер задания}()`

const {
  Observable: { create }
} = require("rxjs");
const { interval } = require("rxjs");
const { merge } = require("rxjs/operators");

const { take, skip } = require("rxjs/operators");

// __________
// Задание №1
// Реализовать свой обсервер, который будет эмитить данные инкрементальные
// через число секунд по ряду фибоначи -> сразу, 1сек, 1 сек, 2 сек, 3сек,
// 5сек и т.д.
function task1() {
  create(observer => {
    let counter = 0;
    const nextFibonacci = (() => {
      let lastFibNum = 1;
      let currFibNum = 0;
      return function() {
        let addTerm = lastFibNum;
        lastFibNum = currFibNum;
        return (currFibNum += addTerm);
      };
    })();

    setTimeout(function tick() {
      observer.next(counter++);
      setTimeout(tick, nextFibonacci() * Math.round(1000));
    }, 0);
  }).subscribe({
    next: console.log
  });
}

// __________
// Задание №2
// Даны два интервала: один 100 мс, второй 300 мс -> слить их данные -> взять
// элементы с 5 по 12.
function task2() {
  const interval100ms = interval(100)
    .pipe(take(12))
    .pipe(skip(5));

  const interval300ms = interval(300)
    .pipe(take(12))
    .pipe(skip(5))

    .pipe(merge(interval100ms));

  interval300ms.subscribe(
    val => {
      console.log(val);
    },
    err => {},
    () => console.log(`"Merge intervals" is completed...`)
  );
}

// __________
// Задание №3
// Реализлвать свой interval с помощью create.
function task3() {
  const myInterval = period =>
    create(observer => {
      let counter = 0;
      setInterval(() => observer.next(counter++), period);
    });

  myInterval(500).subscribe(val => console.log(val));
}

// __________
// Задание №4
// Реаизовать свой from с помощью create.
function task4() {
  const myFrom = arrayLike =>
    create(observer => {
      Array.from(arrayLike).forEach(value => observer.next(value));
      observer.complete();
    });

  myFrom([1, 2, 3, 4, 5, 6]).subscribe({
    next: console.log,
    complete: () => console.log(`"My from" is completed...`)
  });
}

// __________
// Задание №5
// Реализовать from with delay -> [arr], ms -> эмитится значение обсервера
// с интервалом, указаным в милисекундах.
function task5() {
  const fromWithDelay = (arrayLike, period) =>
    create(observer => {
      const valueArr = Array.from(arrayLike);
      let counter = 0;
      let timerId = setInterval(() => {
        observer.next(valueArr[counter++]);
        if (counter > valueArr.length - 1) {
          clearInterval(timerId);
          observer.complete();
        }
      }, period);
    });

  fromWithDelay([50, 40, 30, 20, 10], 1000).subscribe({
    next: console.log,
    complete: () => console.log(`"From with delay" is completed...`)
  });
}

// ПРОВЕРКА

// task1();
task2();
// task3();
// task4();
// task5();
