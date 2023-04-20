// This service for manage repositories api
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from '../models/repository.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Commits } from '../models/commits.modal';

@Injectable({
  providedIn: 'root'
})
export class RepositorieService {

  baseApiurl: string = environment.githubEndPoint;

  constructor(private http: HttpClient) { }

  /*
  * This function to get all repositories user by username from Githup Api
  * username @string
  */
  findAll(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.baseApiurl}/users/${username}/repos`);
  }

  /*
  * This function to get all commit user by username from Githup Api
  * username @string
  * repo @string
  */
  getWeeklyCommit(username: string, repo: string): Observable<Commits> {
    return this.http.get<Commits>(`${this.baseApiurl}/repos/${username}/${repo}/stats/participation`);
  }
}
