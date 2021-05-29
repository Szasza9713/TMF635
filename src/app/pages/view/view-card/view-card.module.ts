import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCardComponent } from './view-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ViewCardComponent
  ],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [ViewCardComponent]
})
export class ViewCardModule { }
