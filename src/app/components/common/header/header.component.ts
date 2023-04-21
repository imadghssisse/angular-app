// This component for manage the header the application
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router,
  ) {}
  
  /*
  * This function for search profile with username
  */
  searchProfile(f: NgForm): void {
    if(f.valid) {
      this.router.navigateByUrl(`/users/${f.value.search}`)
    }
  }

}
