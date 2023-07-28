import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardMaterialModule } from '@app/shared/material/dashboard-mat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardDetailComponent
  ],
  imports: [
    DashboardMaterialModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class DashboardModule {}
