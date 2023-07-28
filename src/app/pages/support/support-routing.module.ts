import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportDetailComponent } from './support-detail/support-detail.component';
import { SupportComponent } from './support.component';

const routes: Routes = [
  {
    path: '',
    component: SupportComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'detail'
      },
      {
        path: 'detail',
        component: SupportDetailComponent,
        pathMatch: 'prefix',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class SupportRoutingModule {}
