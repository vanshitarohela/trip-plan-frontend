import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    ListDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ListComponent
  ],
})
export class SharedMModule { }
