// This components to manage followrs of user in Github
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Follower } from 'src/app/models/follower.model';
import { FollowersService } from 'src/app/services/followers.service';
import { setUsers } from 'src/app/store/modules/user.actions';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  constructor(
    private store: Store,
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
          this.followerService.findAll(username).subscribe(data => {
            this.store.dispatch(setUsers({ data }))
          })
        } 
      }
    })
  }

}
