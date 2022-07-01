import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transfert'
})
export class TransfertPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
