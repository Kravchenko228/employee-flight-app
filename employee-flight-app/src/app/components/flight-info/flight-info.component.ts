import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../../models/flight.model';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-flight-info',
  standalone: true,
  imports: [CommonModule, DurationPipe],

  templateUrl: './flight-info.component.html',
  styleUrl: './flight-info.component.css'
})
export class FlightInfoComponent {
  @Input() flight!: Flight | null;
}
