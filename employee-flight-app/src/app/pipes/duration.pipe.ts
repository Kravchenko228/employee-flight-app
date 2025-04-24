import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(min: number): string {
    if (min == null || isNaN(min)) return '';
    const hours = Math.floor(min / 60);
    const mins = min % 60;
    return `${hours}h ${mins}m`;
  }

}
