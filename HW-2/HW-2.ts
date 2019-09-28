// Интерфейс
interface IConverter {
  convertTo(n: number): string;
  convertFrom(s: string): number;
}

// Класс для работы c числами любой позиционной системы исчисления
class Converter implements IConverter {
  private _base: number;
  private _numerals: string[];

  constructor(base?: number, numerals?: string);
  constructor(base: number = 10, numerals: string = "0123456789ABCDEF") {
    // диапазон для базы числа от 2 до 16
    if (base < 2) this._base = 2;
    else if (base > 16) this._base = 16;
    else this._base = base;

    this._numerals = numerals.split("").slice(0, this._base);
  }

  // ГЕТ возвращает базу используемого числа
  public get getBase(): number {
    return this._base;
  }

  // ГЕТ возвращает цифры используемого числа
  public get getNumerals(): string {
    return this._numerals.join();
  }

  // Метод конвертирует десятиричное число в строку - число заданного основания
  public convertTo(n: number): string {
    if (!isFinite(n)) return String(n);

    let rsl: string = "";
    let quot: number = n;

    do {
      const numIndex: number = quot % this._base;
      rsl = this._numerals[numIndex].concat(rsl);
      quot = (quot - numIndex) / this._base;
    } while (quot > 0);

    return rsl;
  }

  // Метод конвертирует строку с числом заданного основания в десятиричное
  public convertFrom(s: string): number {
    let str: string = s
      .split("")
      .reverse()
      .join("");
    let rsl: number = 0;
    do {
      const chrNum: string = str.slice(-1);

      // числовое, десятиричное значение цифры, при любом регистре букв
      const intUpCs: number = this._numerals.indexOf(chrNum.toUpperCase());
      const intLwCs: number = this._numerals.indexOf(chrNum.toLowerCase());

      const intNum: number = intUpCs !== -1 ? intUpCs : intLwCs;
      if (intNum === -1) return NaN;

      str = str.slice(0, -1);
      const dis: number = intNum * Math.pow(this._base, str.length);
      rsl += dis;
    } while (str.length > 0);
    return rsl;
  }
}

//
// _____ПРОВЕРКА_____

function outResult(conv: Converter, num: number, str: string): void {
  console.log(`
  Base is ${conv.getBase}; Numerals are ${conv.getNumerals}\n
  Result TO: ${num} is "${conv.convertTo(num)}"
  Result FROM: "${str}" is ${conv.convertFrom(str)}`);
}

class Binary extends Converter {
  constructor() {
    super(2);
  }
}

class Octal extends Converter {
  constructor() {
    super(8);
  }
}

class Hexadecimal extends Converter {
  constructor() {
    super(16);
  }
}

const binary: Converter = new Binary();
const octal: Converter = new Octal();
const hexadec: Converter = new Hexadecimal();

outResult(binary, 23, "10111");
outResult(octal, 9, "11");
outResult(hexadec, 65500, "ffdc");

// Дополнительно можно создавать любые эзотерические,
// экзотические позиционные системы с одним знаком в разряде и
// основанием до 16

class OtherStyle extends Converter {
  constructor() {
    super(5, "_<^>!");
  }
}

const otherStyle: Converter = new OtherStyle();
outResult(otherStyle, 2410, ">!<^_");
