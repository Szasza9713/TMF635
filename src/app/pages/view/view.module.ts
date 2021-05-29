import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { ViewCardModule } from './view-card/view-card.module';



@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,ViewCardModule
  ],
  exports: [ViewComponent]
})
export class ViewModule { }
