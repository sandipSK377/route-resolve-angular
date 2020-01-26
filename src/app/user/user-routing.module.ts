import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { userResolver } from '../core/resolver/user.resolver';


const routes: Routes = [
  // {
  //   path:'',redirectTo:'user-details',pathMatch:'full'
  // },
  {
    path:'user-details',component:UserDetailsComponent,resolve: {user:userResolver}
  },
  {
    path:'all-user',component:AllUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
