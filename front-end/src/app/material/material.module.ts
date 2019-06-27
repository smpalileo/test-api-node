import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule
} from  '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
