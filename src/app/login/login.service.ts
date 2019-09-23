import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user.model';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class LoginService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    return this.http.post<User>('http://localhost:8080/v1/user/login', {
      username: username,
      password: password,
    });
  }
  loginSuccesfull(){
    this.loggedIn.next(true);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}