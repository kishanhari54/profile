import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesComponent } from './certificates.component';
import {GalleriaModule} from 'primeng/galleria';
import { RouterModule, Routes } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';

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
    ButtonModule,
    CarouselModule,
    GalleriaModule
  ],
  exports:[RouterModule]
})
export class CertificatesModule { }
