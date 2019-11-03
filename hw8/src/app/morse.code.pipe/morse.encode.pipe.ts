import { Pipe, PipeTransform } from "@angular/core";

import { MorseKeys } from "./morse.keys";

// Азбука Морзе, стандартный латинский вариант
const _defaultKeys: string[][] = MorseKeys;

@Pipe({
  name: "toMorseEncode"
})
export class MorseEncodePipe implements PipeTransform {
  private _key: string[][] = _defaultKeys;
  private _separator: string = " ";

  public transform(value: string): string {
    const resultArr: string[] = value.split("").map((char: string) => {
      const cryptedChar: string[] = this._key.find(
        (key: string[]) => char.toUpperCase() === key[0]
      );
      return cryptedChar ? cryptedChar[1] : "";
    });

    return resultArr.join(this._separator);
  }
}
