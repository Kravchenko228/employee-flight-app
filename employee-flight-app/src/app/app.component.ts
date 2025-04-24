import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule, EmployeesListComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-flight-app';
}
