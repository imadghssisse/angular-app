// This component for  manage list users in Githup
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  
  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.usersList();
  }

  /*
  * This function execute service to get list users in Github
  */
  usersList(): void {
    this.userService.findAll().subscribe((response: User[]) => {
      this.users = response;
    })
  }
}
