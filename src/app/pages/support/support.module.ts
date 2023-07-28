import { NgModule } from '@angular/core';
import { SupportComponent } from './support.component';
import { SupportMaterialModule } from '@app/shared/material/support-mat.module';
import { SupportRoutingModule } from './support-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared/shared.module';
import { SupportDetailComponent } from './support-detail/support-detail.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SupportComponent,
    SupportDetailComponent
  ],
  imports: [
    SupportMaterialModule,
    SupportRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class SupportModule {}
