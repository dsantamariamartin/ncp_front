import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(name:string, email:string,username:string, password:string) {
    return this.http.post<String>('http://localhost:8080/v1/user/register', {
      name: name,
      email: email,
      username: username,
      password: password,
    });
  }
}