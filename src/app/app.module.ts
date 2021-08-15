import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { HeaderComponent } from './components/header/header.component';
import { SideComponentComponent } from './components/side-component/side-component.component';
//import {ScrollTopModule} from 'primeng/scrolltop';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  /*   AboutMeComponent,
    MainSectionComponent,
    HeaderComponent,
    SideComponentComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ScrollTopModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
