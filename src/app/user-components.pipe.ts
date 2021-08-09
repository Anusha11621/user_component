import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userComponents'
})
export class UserComponentsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
