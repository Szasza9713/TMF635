import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardActions } from '@angular/material/card';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule,FormsModule,ReactiveFormsModule,MatInputModule
  ],
  exports: [AddComponent]
})
export class AddModule { }
