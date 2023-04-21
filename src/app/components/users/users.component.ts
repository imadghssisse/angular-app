// This component for  manage list users in Githup
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { setUsers, totalSearch } from 'src/app/store/modules/user.actions';
import { ActivatedRoute } from '@angular/router';
import { Search } from 'src/app/models/search.modal';
import { selectTotalSearch } from 'src/app/store/modules/user.selectore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  totalCount = this.store.select(selectTotalSearch);

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.usersList();
  }

  /*
  * This function execute service to get list users in Github
  */
  usersList(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        let username = params.get('username');
        if (username) {
          this.userService.searchByName(username).subscribe((response: Search) => {            
            this.store.dispatch(setUsers({ data: response.items }))
            this.store.dispatch(totalSearch({ totalCount: response.total_count }))
          })
        } else {
          this.userService.findAll().subscribe((response: User[]) => {
            this.store.dispatch(setUsers({ data: response }))
            this.store.dispatch(totalSearch({ totalCount: response.length }))
          })
        }
      }
    })
  }
}
