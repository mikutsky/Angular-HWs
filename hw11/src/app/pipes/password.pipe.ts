import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toMorseDecode"
})
export class PaswordPipe implements PipeTransform {
  public transform(value: string): string {
    return value ? "*".repeat(value.length) : "";
  }
}
