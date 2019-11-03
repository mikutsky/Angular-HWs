import { Pipe, PipeTransform } from "@angular/core";

import { MorseKeys } from "./morse.keys";

// Азбука Морзе, стандартный латинский вариант
const _defaultKeys: string[][] = MorseKeys;

@Pipe({
  name: "toMorseDecode"
})
export class MorseDecodePipe implements PipeTransform {
  private _key: string[][] = _defaultKeys;
  private _separator: string = " ";

  public transform(value: string): string {
    const resultArr: string[] = value
      .split(this._separator)
      .map((cryptedChar: string) => {
        const char: string[] = this._key.find(
          (key: string[]) => cryptedChar === key[1]
        );
        return char ? char[0] : "";
      });

    return resultArr.join(this._separator);
  }
}
