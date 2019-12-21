import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [{path:"index",component:IndexComponent},
                        {path:"",component:IndexComponent},
                        {path:"about",component:AboutusComponent},
                        {path:"service",component:IndexComponent},
                        {path:"gallery",component:GalleryComponent},
                        {path:"contact",component:ContactusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
