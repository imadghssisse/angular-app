// This service for manage users api
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Search } from '../models/search.modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseApiurl: string = environment.githubEndPoint;

  constructor(private http: HttpClient) { }

  /*
  * This function to get all list user from Githup Api
  */
  findAll() : Observable<User[]> {
    return this.http.get<User[]>(`${this.baseApiurl}/users`);
  }

  /*
  * This function to get user by username from Githup Api
  * username @string
  */
  findByName(username: string): Observable<User>{
    return this.http.get<User>(`${this.baseApiurl}/users/${username}`);
  }

  /*
  * This function to get all list user by username from Githup Api
  * username @string
  */
  searchByName(username: string): Observable<Search>{
    return this.http.get<Search>(`${this.baseApiurl}/search/users?q=${username}`);
  }
}
