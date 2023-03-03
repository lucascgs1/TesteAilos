// pages
import { MainComponent } from './main.component';
import { DocumentsComponent } from './documents/documents.component';
import { RegisterComponent } from './register/register.component';
import { AdmissionComponent } from './admission/admission.component';

// module
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../shared/shared.module';

// packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './init/init.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [MainComponent, InitComponent, DocumentsComponent, RegisterComponent, AdmissionComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule, NgxMaskModule.forChild()],
  exports: [
    InitComponent, DocumentsComponent, RegisterComponent, AdmissionComponent
  ]
})
export class MainModule { }
