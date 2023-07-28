import { NgModule } from '@angular/core';
import { TeachersComponent } from './teachers.component';
import { TeachersMaterialModule } from '@app/shared/material/teachers-mat.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeachersRoutingModule } from './teachers-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    TeachersComponent,
    TeacherListComponent
  ],
  imports: [
    TeachersMaterialModule,
    TeachersRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
})
export class TeachersModule {}
