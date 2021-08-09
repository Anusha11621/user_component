import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userComponent'
})
export class UserComponentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
