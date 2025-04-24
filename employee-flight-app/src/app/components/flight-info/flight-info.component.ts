import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-info',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './flight-info.component.html',
  styleUrl: './flight-info.component.css'
})
export class FlightInfoComponent {
  @Input() flight!: Flight | null;
}
