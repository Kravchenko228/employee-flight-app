import { EmployeesService } from "../../services/employees.service";
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-employees-list',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
    workers: any[] = [];
    errorMessage: string = '';

    constructor(private employeesService: EmployeesService) { }

    ngOnInit(): void {
        this.getWorkers();
    }

    getWorkers(): void {
        this.employeesService.getWorkers().subscribe(
            (data: any) => {
                this.workers = data;
            },
            (error: any) => {
                this.errorMessage = 'Error fetching workers data';
                console.error(error);
            }
        );
    }
}