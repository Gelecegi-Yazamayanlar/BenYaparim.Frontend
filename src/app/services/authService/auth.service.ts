import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:5233/api';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/Auth/Login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        const decodedToken = jwtDecode(response.token);
        console.log('Decoded JWT:', decodedToken);
      }),
    );
  }

  signup(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/Auth/Signup`, user);
  }
}
