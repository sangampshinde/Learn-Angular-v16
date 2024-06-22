import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import routing components
import { AboutComponent } from './Routing/about/about.component';
import { UserComponent } from './Routing/user/user.component';
import { HomeComponent } from './Routing/home/home.component';


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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
