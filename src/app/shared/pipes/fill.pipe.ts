import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fill",
  standalone: true,
})
export class FillPipe implements PipeTransform {
  transform(length: number) {
    return Array.from<number>({ length });
  }
}
