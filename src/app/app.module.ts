import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

import { GalleryComponent } from './gallery/gallery.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {DialogModule} from 'primeng/dialog';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutusComponent,
    ContactusComponent,
    
    GalleryComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,DialogModule,AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
