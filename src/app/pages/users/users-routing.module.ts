import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users.component';
import { MyCoursesComponent } from './myCourses/myCourses.component';
import { MyConquestsComponent } from './myConquests/myConquests.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile'
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'myCourses',
        component: MyCoursesComponent
      },
      {
        path: 'myConquests',
        component: MyConquestsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
