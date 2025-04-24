import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Flight } from '../../models/flight.model';
import { FlightsService } from '../../services/flights.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-flights-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './flights-table.component.html',
  styleUrl: './flights-table.component.css'
})
export class FlightsTableComponent implements OnChanges {
  @Input() workerId!: string;
  @Output() flightSelected = new EventEmitter<Flight>();
  flights: Flight[] = [];
  selectedFlight: Flight | null = null;
  private timer: any;

  constructor(private flightsService: FlightsService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['workerId'] && this.workerId) {
      this.clearTimer();
      this.loadFlights();

      this.clearTimer();
      this.startTimer();
    }
  }

  loadFlights(): void {

    this.flightsService.getFlightsByWorker(this.workerId).subscribe({
      next: (data) => {

        this.flights = data;
        if (data.length) this.selectFlight(data[0]);
      },
      error: (err) => console.error('Flight fetch error:', err)
    });
  }
  selectFlight(flight: Flight): void {
    this.selectedFlight = flight;
    this.flightSelected.emit(flight);
  }
  startTimer(): void {
    this.timer = setInterval(() => {

      this.loadFlights();
    }, 60000);
  }
  clearTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }


  onFlightSelect(flight: Flight) {
    this.selectedFlight = flight;
    this.flightSelected.emit(flight);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

}
