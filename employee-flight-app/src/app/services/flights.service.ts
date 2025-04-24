import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }
  getFlightsByWorker(workerId: string): Observable<Flight[]> {
    return this.http.get<any[]>(`/api/flights/${workerId}`).pipe(
      map(data => data.map(item => ({
        flightNumber: item.num,
        origin: item.from,
        originDate: item.from_date,
        destination: item.to,
        destinationDate: item.to_date,
        planeNumber: item.plane || 'N/A',
        duration: item.duration || 0,
        originGate: item.from_gate || 'N/A',
        destinationGate: item.to_gate || 'N/A'
      })))
    );
  }

}
