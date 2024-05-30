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
  private userProfileSubject = new BehaviorSubject<any>(
    this.checkUserProfile(),
  );

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
    localStorage.removeItem('name');
    localStorage.removeItem('email');

    this.isLoggedInSubject.next(false);
    this.userProfileSubject.next(null);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  getUserProfile(): Observable<any> {
    //mantık hatası var tokenı olmayan adamdan token isteyen fonksiyon mu olur mk

    return this.userProfileSubject.asObservable();
  }

  handleAuthentication(token: string): void {
    localStorage.setItem('token', token);
    const decodedToken: { [key: string]: any } = this.decodeToken();
    console.log('getUserProfile Token', decodedToken);
    const name =
      decodedToken[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ];
    const email =
      decodedToken[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
      ];
    console.log('name: ' + name);
    console.log('email: ' + email);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    this.userProfileSubject.next({ name, email });
    console.log('userProfileSujbject nedir?', this.userProfileSubject);

    this.isLoggedInSubject.next(true);
  }

  checkTokenPresence(): boolean {
    return !!localStorage.getItem('token');
  }

  private checkUserProfile() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (name && email) {
      return { name, email };
    } else {
      return null;
    }
  }

  decodeToken(): any {
    const token = localStorage.getItem('token');
    return token ? jwtDecode(token) : null;
  }
}
