import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import routing components
import { AboutComponent } from './Routing/about/about.component';
import { UserComponent } from './Routing/user/user.component';
import { HomeComponent } from './Routing/home/home.component';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';


// routing define area to define routes
const routes: Routes = [
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'user/:id',
    component:UserComponent,
  },
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'**',//wild card route
    component:PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
