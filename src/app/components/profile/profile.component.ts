//This component for manage the profil user and show his information
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username: null | string = '';
  user = {} as User;
  showFollowers: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  /*
  * This function execute service to get informations about user in Github
  */
  getProfile(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.username = params.get('username');        
        if(this.username) {
          this.userService.findByName(this.username).subscribe({
            next: (response) => {                            
              this.user = response;              
            }
          })
        }
      }
    })
  }

  showFollowrs() {
    this.showFollowers = !this.showFollowers;
  }
}
