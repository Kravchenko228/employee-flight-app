import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  apiUrl = environment.apiUrl;
  workersEndpoint = environment.workersEndpoint;
  flightsEndpoint = environment.flightsEndpoint;

  constructor(private http: HttpClient) { }
  getWorkers(): Observable<any> {
    return this.http.get(this.apiUrl, { params: { endpoint: this.workersEndpoint }, headers: { Accept: 'application/json' } });
  }
}
