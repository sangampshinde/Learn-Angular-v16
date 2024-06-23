import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import routing components
import { AboutComponent } from './Routing/about/about.component';
import { UserComponent } from './Routing/user/user.component';
import { HomeComponent } from './Routing/home/home.component';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';
import { AboutCompanyComponent } from './Routing/Child_Routing/about-company/about-company.component';
import { AboutMeComponent } from './Routing/Child_Routing/about-me/about-me.component';


// routing define area to define routes
const routes: Routes = [
  {
    // Note dont put / infront of routes here wile defining path
    path:'',
    component:HomeComponent,
  },

  {
    path:'about',
    component:AboutComponent,
    // child Route array 
    children:[
      {path:'company',component:AboutCompanyComponent},
      {path:'me',component:AboutMeComponent}
    ]
  },

  {
    path:'user/:id',
    component:UserComponent,
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
