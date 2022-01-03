import { Observable, BehaviorSubject, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Manager } from '../signup/manager.mode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'http://localhost:3000/ManagerList'
  private userSubject: BehaviorSubject<Manager>;
  public user: Observable<Manager>;

  constructor(private router: Router, private apiService: ApiService, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<Manager>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): Manager {
    return this.userSubject.value;
  }

  // login details match with database
  login({ email, password }: any) {
    return this.http.get<any>(this.api)
        .pipe(map((res: any) => {
    return res;
      }))   
  }

  // set token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // get token
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
  // check manager is logged in with token or not
  isLoggedIn() {
    return this.getToken() !== null;
  }

  // logout for redirect to login page from dashboard
  logout() {
    localStorage.removeItem('token');  
    this.router.navigate(['login']);
  }
}