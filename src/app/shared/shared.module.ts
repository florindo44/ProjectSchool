import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitlebarComponent } from './components/toolbar-title/titlebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [
    TitlebarComponent,
  ],
  exports: [
    CommonModule,
    TitlebarComponent,
  ]
})
export class SharedModule { }
