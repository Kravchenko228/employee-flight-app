import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Flight } from './models/flight.model';

import { FlightsTableComponent } from './components/flights-table/flights-table.component';



@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule, EmployeesListComponent, FlightsTableComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-flight-app';
  selectedFlight: Flight | null = null;
  selectedWorkerId: string = '';

  onWorkerSelected(workerId: string) {
    this.selectedWorkerId = workerId;
    this.selectedFlight = null;
  }
  onFlightSelected(flight: Flight) {
    this.selectedFlight = flight;
  }
}
