import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,MatInputModule,MatDatepickerModule,
    MatNativeDateModule,MatFormFieldModule,MatToolbarModule,MatIconModule, RouterModule,MatCardModule,MatButtonModule
  ],
  exports: [EditComponent]
})
export class EditModule { }
