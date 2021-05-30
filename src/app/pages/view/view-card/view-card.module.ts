import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCardComponent } from './view-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ViewCardComponent
  ],
  imports: [
    CommonModule, MatCardModule,MatIconModule,RouterModule,MatButtonModule
  ],
  exports: [ViewCardComponent]
})
export class ViewCardModule { }
