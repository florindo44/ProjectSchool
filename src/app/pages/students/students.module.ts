import { NgModule } from '@angular/core';
import { StudentsComponent } from './students.component';
import { StudentsMaterialModule } from '@app/shared/material/students-mat.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentsRoutingModule } from './students-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentListComponent
  ],
  imports: [
    StudentsMaterialModule,
    StudentsRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
})
export class StudentsModule {}
