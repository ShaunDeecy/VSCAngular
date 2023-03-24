import { Injectable } from '@angular/core';
import { UserProfile } from '../UserProfile';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private addUserUrl = 'https://localhost:7246/api/Login';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

      addUser(userProfile: UserProfile): Observable<UserProfile> {
        return this.http.post<UserProfile>(this.addUserUrl, userProfile, this.httpOptions);
          // .pipe(
          //   catchError(this.handleError<UserProfile>('addUser')));
          //nog aan werken
      }
}