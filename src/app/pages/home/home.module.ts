import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UpdateModule } from '../update/update.module';
import { DeleteModule } from '../delete/delete.module';
import { ViewModule } from '../view/view.module';
import { NavModule } from '../nav/nav.module';
import { AddModule } from '../add/add.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule, ViewModule,UpdateModule,DeleteModule,NavModule,AddModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
