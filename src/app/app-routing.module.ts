import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path: '', component: LoanTypesComponent},
  {path: 'loantypes', component: LoanTypesComponent},
  {path: 'customers', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
