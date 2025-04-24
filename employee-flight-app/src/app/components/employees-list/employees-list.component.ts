import { EmployeesService } from "../../services/employees.service";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    selectedEmployee: any;

    constructor(private employeesService: EmployeesService) { }

    @Output() employeeSelected = new EventEmitter<string>();

    ngOnInit(): void {
        this.getWorkers();
    }

    onSelect(workerId: string): void {
        this.selectedEmployee = this.workers.find(w => w.id === workerId);
        this.employeeSelected.emit(workerId);
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