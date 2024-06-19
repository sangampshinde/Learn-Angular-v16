import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TdfComponent } from './Forms/TDF/tdf/tdf.component';
import { TdfVComponent } from './Forms/TDF-Validation/tdf-v/tdf-v.component';
import { RfComponent } from './Forms/RF/rf/rf.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    TdfVComponent,
    RfComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  


 }
