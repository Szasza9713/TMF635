import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule,FormsModule,ReactiveFormsModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatCardModule
  ],
  exports: [AddComponent]
})
export class AddModule { }
