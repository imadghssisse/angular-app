// This components to manage followrs of user in Github
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Follower } from 'src/app/models/follower.model';
import { FollowersService } from 'src/app/services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  followers: Follower[] = [];

  constructor(
    private route: ActivatedRoute,
    private followerService: FollowersService
  ) {}


  ngOnInit(): void {
    this.getFollowrs();
  }

  /*
  * This function for get followers
  */
  getFollowrs(): void {
    this.route.paramMap.subscribe({
      next: params => {
        const username = params.get('name');
        if(username) {
          this.followerService.findAll(username).subscribe(response => {
            this.followers = response; 
          })
        } 
      }
    })
  }

}
