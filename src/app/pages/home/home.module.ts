import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ViewModule } from '../view/view.module';
import { AddModule } from '../add/add.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule, ViewModule,AddModule,MatToolbarModule,MatIconModule,MatButtonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
