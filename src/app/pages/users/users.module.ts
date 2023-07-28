import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { MyProfileComponent } from './myProfile/myProfile.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersMaterialModule } from '@app/shared/material/users-mat.module';
import { SharedModule } from '@app/shared/shared.module';
import { MyDisciplinesComponent } from './myDisciplines/myDisciplines.component';
import { MyConquestsComponent } from './myConquests/myConquests.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    UsersComponent,
    MyProfileComponent,
    MyDisciplinesComponent,
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
