// This component is for manage the repositories of user from Github
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commits } from 'src/app/models/commits.modal';
import { Repository } from 'src/app/models/repository.model';
import { User } from 'src/app/models/user.model';
import { RepositorieService } from 'src/app/services/repositorie.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit{

  username: null | string = '';
  repositories: Repository[] = [];
  commits = {} as Commits;

  constructor(
    private route: ActivatedRoute,
    private repositorieService: RepositorieService
  ) {}

  ngOnInit(): void {    
    this.getRepositories();
  }

  /*
  * This function execute service to get repositories of user from Github
  */
  getRepositories(): void {
    this.commits = {} as Commits;
    this.route.paramMap.subscribe({
      next: (params) => {
        this.username = params.get('username');
        if(this.username) {
          this.repositorieService.findAll(this.username).subscribe((response) => {
            this.repositories = response;
          })
        }
      }
    })
  }

  getStatistics(repo: Repository): void {
    if(this.username) {
      this.repositories = [repo];
      this.repositorieService.getWeeklyCommit(this.username, repo.name).subscribe((response: Commits) => {
        this.commits = response;
      })
    }
  }
}
