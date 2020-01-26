import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [UserDetailsComponent, AllUsersComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule
  ]
})
export class UserModule { }
