import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersMaterialModule } from '@app/shared/material/usersMat.module';
import { SharedModule } from '@app/shared/shared.module';
import { MyCoursesComponent } from './myCourses/myCourses.component';
import { MyConquestsComponent } from './myConquests/myConquests.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    UsersComponent,
    ProfileComponent,
    MyCoursesComponent,
    MyConquestsComponent
  ],
  imports: [
    UsersRoutingModule,
    UsersMaterialModule,
    FlexLayoutModule,
    SharedModule
  ],
})
export class UsersModule { }
