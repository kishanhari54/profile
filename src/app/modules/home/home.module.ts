import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {ScrollTopModule} from 'primeng/scrolltop';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from 'src/app/components/about-me/about-me.component';
import { MainSectionComponent } from 'src/app/components/main-section/main-section.component';
import { SideComponentComponent } from 'src/app/components/side-component/side-component.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },]

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    MainSectionComponent,
    HeaderComponent,
    SideComponentComponent
  ],
  imports: [
    CommonModule,
    ScrollTopModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeModule { }
