// module
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// package
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    LayoutModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    SidenavComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
