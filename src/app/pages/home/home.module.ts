import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UpdateModule } from '../update/update.module';
import { DeleteModule } from '../delete/delete.module';
import { ViewCardModule } from '../view/view-card/view-card.module';
import { NavModule } from '../nav/nav.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, ViewCardModule,UpdateModule,DeleteModule,NavModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
