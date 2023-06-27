import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoanTypesComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
