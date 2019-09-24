// Задание №1. Функция определяет, является ли переданная строка палиндромом.
function isPal(str: string): boolean {
  const mirrorStr: string = Array.from(str)
    .reverse()
    .join("");
  return mirrorStr === str;
}

// Проверка
let exmStr: string = "ASDqwe"; //это не палиндром
console.log(`"${exmStr}" it's a ${isPal(exmStr)} palindrome`);
exmStr = "abc-12321-cba"; //это палиндром
console.log(`"${exmStr}" it's a ${isPal(exmStr)} palindrome`);

//
// Задание №2. Функция возвращает массив чисел Фибоначи, до переданного
// в качестве аргумента числа
function fibArr(maxN: number): Array<number> {
  if (maxN < 2) return [];

  const rsl: Array<number> = [1];
  let curVal: number;
  for (
    curVal = rsl[rsl.length - 1];
    curVal < maxN;
    curVal += rsl[rsl.length - 2]
  )
    rsl.push(curVal);

  return rsl;
}

// Проверка
console.log(fibArr(1));
console.log(fibArr(2));
console.log(fibArr(4));
