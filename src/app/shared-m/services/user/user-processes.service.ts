import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProcessesService {
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/api/v1/users");
  }

  getUserById(id: String): Observable<User> {
    return this.http.get<User>("http://localhost:8080/api/v1/users/" + id);
  }

  insertUser(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:8080/api/v1/users/insert", user);
  }

  verifyAuthentication(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:8080/api/v1/users/signin", user);   
  }

  updateUserInLocalStorage(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getSignedInUser() {
    var ans = localStorage.getItem("user");
    if(ans) {
      return JSON.parse(ans);
    }
    return null;
  }
}
