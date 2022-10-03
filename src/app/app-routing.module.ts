import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketReadComponent } from './ticket-read/ticket-read.component';
import { TicketComponent } from './ticket/ticket.component';
import { ProductComponent } from './product/product.component';
//var app = angular.module('myApp', ['ngRoute']);
const routes: Routes = [
{ path: 'ticket', component: TicketComponent },
{ path: 'ticketRead', component: TicketReadComponent },
{ path: 'product/product', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
