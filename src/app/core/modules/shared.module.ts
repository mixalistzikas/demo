import { PagingComponent } from './../components/paging/paging.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      PagingComponent
   ],
   declarations: [
      PagingComponent
   ]
})
export class SharedModule {
}
