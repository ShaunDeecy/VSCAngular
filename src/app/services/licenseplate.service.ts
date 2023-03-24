import { Injectable } from '@angular/core';
import { LicensePlate } from '../LicensePlate';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicenseplateService {

  private allPlatesUrl = 'https://localhost:7246/api/LicensePlate';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

      /** GET heroes from the server */
    getPlates(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>(this.allPlatesUrl)
  }
}
