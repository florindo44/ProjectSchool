import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseMaterialModule } from '@app/shared/material/coursesMat.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent
  ],
  imports: [
    CourseMaterialModule,
    CoursesRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
})
export class CoursesModule {}
