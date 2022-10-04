import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketReadComponent } from './ticket-read/ticket-read.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
   AppComponent,
   TicketComponent,
   TicketReadComponent,
   ProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'ticket/ticket', component: TicketComponent},
      {path: 'ticket-read/ticket-read', component: TicketReadComponent},
      {path: 'product/product', component: ProductComponent},
     // {path: '', redirectTo: 'app', pathMatch: 'full'},
    ]),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
