import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketReadComponent } from './ticket-read/ticket-read.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   AppComponent,
    TicketComponent,
   TicketReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'ticket/ticket', component: TicketComponent},
      {path: 'ticket/ticket-read', component: TicketReadComponent},
     // {path: '', redirectTo: 'app', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
