import { Injectable } from '@angular/core';
import { UserProfile } from '../UserProfile';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private allUsersUrl = 'https://localhost:7246/api/Login';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

   constructor(
    private http: HttpClient) { }

      /** GET heroes from the server s*/
    getProfiles(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(this.allUsersUrl)
  }
  
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
