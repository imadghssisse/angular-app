import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { FollowersComponent } from './components/followers/followers.component';
import { CartComponent } from './components/common/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import modules from './store/app.store';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    ProfileComponent,
    RepositoriesComponent,
    FollowersComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({...modules}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
