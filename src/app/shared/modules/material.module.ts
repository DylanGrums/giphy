import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [
    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatCardModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
