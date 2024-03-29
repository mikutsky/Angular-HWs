// ДЗ №3:
// 1. Написать функцию заглушку, которая через промежуток времени от 0.5 до 3 сек
// будет рандомно возвращать стрингу прогнозы погоды (солнце, ветер, тучи, дождь(enum)).
// 2. Вызвать в паралель 4 прогноза погоды и выдать конечному пользователю
// (console.log) тот, который прийдет быстрее.
// 3. Вызвать в паралель 40 прогнозов погоды -> дождаться всех результатов и выдать
// самый часто встречающийся в прогнозах результат.
// Все промисы делать типизированными.

// __________
// Задание №1
// Функция заглушка, возвращает стрингу погоды через определенные интервалы
function getMetcast(): Promise<string> {
  enum weather {
    sunny = 0,
    cloudy = 1,
    windy = 2,
    rainy = 3
  }
  const rndTimeout: number = Math.random() * 2500 + 500;
  const rndMetcast: number = Math.floor(Math.random() * 4);

  return new Promise<string>(
    (resolve: (data: string) => void, reject: (err: string) => void): void => {
      // Тут может быть наш обработчик ошибок. Сейчас закомментирован,
      // т.к. не пригодится
      // if (false) reject("This is error!");

      // Возвращаем данные о погоде через промежуток времени
      setTimeout(resolve, rndTimeout, weather[rndMetcast]);
    }
  );
}

// __________
// Задание №2
// Вывести первый из четырех прогнозов
async function firstMetcastRequest(): Promise<string> {
  const promiseArr: Array<Function> = Array(4).fill(undefined, 0, 4);
  return await Promise.race(promiseArr.map(getMetcast));
}

// Проверка
firstMetcastRequest()
  .then(data => console.log(`The first metcast of four: \t"${data}"`))
  .catch(err => console.log(err));

// __________
// Задание №3
// Вызвать в паралель 40 прогнозов погоды -> дождаться всех результатов
// и выдать самый часто встречающийся в прогнозах результат.
async function mostRealMetcast(): Promise<{
  weather: string;
  counter: number;
}> {
  const promiseArr: Array<Function> = Array(40).fill(undefined, 0, 40);
  const promiseRes: string[] = await Promise.all(promiseArr.map(getMetcast));

  const weatherCounter: { [key: string]: number } = {};

  promiseRes.forEach((curResult: string): void => {
    if (weatherCounter[curResult]) return;
    weatherCounter[curResult] = promiseRes.filter(
      (el: string) => el === curResult
    ).length;
  });

  let weather: string = Object.keys(weatherCounter)[0];
  for (const key in weatherCounter)
    if (weatherCounter[key] > weatherCounter[weather]) weather = key;

  return { weather, counter: weatherCounter[weather] };
}

// Проверка
mostRealMetcast()
  .then(data =>
    console.dir(
      `The most real, metcast of forty:` +
        `\n"${data.weather}" - this metcast is received ${data.counter} times`
    )
  )
  .catch(err => console.log(err));
