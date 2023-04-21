// This service for manage follower api
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Follower } from '../models/follower.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  baseApiurl: string = environment.githubEndPoint;

  constructor(
    private http: HttpClient
  ) { }

  /*
  * This function to get all list followers by username from Githup Api
  * username @string
  */
  findAll(username: string): Observable<Follower[]> {
    return this.http.get<Follower[]>(`${this.baseApiurl}/users/${username}/followers`);
  }
}
