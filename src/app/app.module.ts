import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// reactive form module
import { ReactiveFormsModule } from '@angular/forms';
// forms module
import { FormsModule } from '@angular/forms';
// template driven form
import { TdfComponent } from './Forms/TDF/tdf/tdf.component';
import { TdfVComponent } from './Forms/TDF-Validation/tdf-v/tdf-v.component';
// reactive form module
import { RfComponent } from './Forms/RF/rf/rf.component';
import { RfvComponent } from './Forms/RFV/rfv/rfv.component';
// custom directives
import { RedElDirective } from './red-el.directive';
// routing component
import { UserComponent } from './Routing/user/user.component';
import { HomeComponent } from './Routing/home/home.component';
import { AboutComponent } from './Routing/about/about.component';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';
import { AboutCompanyComponent } from './Routing/Child_Routing/about-company/about-company.component';
import { AboutMeComponent } from './Routing/Child_Routing/about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';

// http Client module
import { HttpClientModule } from '@angular/common/http';
import { GetdataComponent } from './API/getdata/getdata.component';
import { SenddataComponent } from './API/senddata/senddata.component';



@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    TdfVComponent,
    RfComponent,
    RfvComponent,
    RedElDirective,
    UserComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    FooterComponent,
    GetdataComponent,
    SenddataComponent 
  ],
  imports: [
    BrowserModule,
    // routing module
    AppRoutingModule,
    // template driven form module
    FormsModule,
    // reactive form module module
    ReactiveFormsModule,
    // http client module to extract data from api
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  


 }
