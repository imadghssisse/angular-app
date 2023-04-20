// This component for manage the header the application
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Search } from 'src/app/models/search.modal';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  resultSearch = {} as Search;

  constructor(
    private userService: UserService
  ) {}
  
  /*
  * This function for search profile with username
  */
  searchProfile(f: NgForm): void {
    if(f.valid) {
      this.userService.searchByName(f.value.search).subscribe((response: Search) => {
        this.resultSearch = response;
      })
    }
  }

}
