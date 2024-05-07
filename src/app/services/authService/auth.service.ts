import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
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
  private isLoggedInSubject = new BehaviorSubject<boolean>(
    this.checkTokenPresence(),
  );
  private userProfileSubject = new BehaviorSubject<any>(this.decodeToken());

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/Auth/Login`, credentials)
      .pipe(tap((response: any) => this.handleAuthentication(response.token)));
  }

  signup(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/Auth/Register`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    this.userProfileSubject.next(null);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  getUserProfile(): Observable<any> {
    return this.userProfileSubject.asObservable();
  }

  handleAuthentication(token: string): void {
    localStorage.setItem('token', token);
    this.isLoggedInSubject.next(true);
    this.userProfileSubject.next(jwtDecode(token));
  }

  checkTokenPresence(): boolean {
    return !!localStorage.getItem('token');
  }

  decodeToken(): any {
    const token = localStorage.getItem('token');
    return token ? jwtDecode(token) : null;
  }
}
