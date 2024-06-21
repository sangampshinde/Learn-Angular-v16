import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// reactive form module
import { ReactiveFormsModule } from '@angular/forms';
// template driven form
import { FormsModule } from '@angular/forms';
import { TdfComponent } from './Forms/TDF/tdf/tdf.component';
import { TdfVComponent } from './Forms/TDF-Validation/tdf-v/tdf-v.component';
import { RfComponent } from './Forms/RF/rf/rf.component';
import { RfvComponent } from './Forms/RFV/rfv/rfv.component';
import { CustomdirectivesComponent } from './Custom_Directives/customdirectives/customdirectives.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    TdfVComponent,
    RfComponent,
    RfvComponent,
    CustomdirectivesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // template driven form
    FormsModule,
    // reactive form module
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  


 }
