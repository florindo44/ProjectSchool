import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './myProfile/myProfile.component';
import { UsersComponent } from './users.component';
import { MyDisciplinesComponent } from './myDisciplines/myDisciplines.component';
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
        redirectTo: 'myProfile'
      },
      {
        path: 'myProfile',
        component: MyProfileComponent,
      },
      {
        path: 'myDisciplines',
        component: MyDisciplinesComponent
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
