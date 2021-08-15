import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesComponent } from './certificates.component';
import {GalleriaModule} from 'primeng/galleria';
import { RouterModule, Routes } from '@angular/router';
import {ButtonModule} from 'primeng/button';

const routes: Routes = [
  {
    path: '', component: CertificatesComponent
  },]

@NgModule({
  declarations: [
    CertificatesComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    RouterModule.forChild(routes),
    ButtonModule
  ],
  exports:[RouterModule]
})
export class CertificatesModule { }
