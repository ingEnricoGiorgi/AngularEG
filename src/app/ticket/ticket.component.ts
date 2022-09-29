import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {


  }
  display = false;
  onPress() {
    //this.display = true;
    /*if you want the component to show and hide on click pressed, use
    use this line*/
    this.display = !this.display;
  }

}
