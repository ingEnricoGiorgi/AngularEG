
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'my-app';


constructor() { }


  ngOnInit(): void {


  }
  displayTicket = false;
  onClickTicket() {
    //this.displayTicket = true;
    /*if you want the component to show and hide on click pressed, use
    use this line*/
    this.displayTicket = !this.displayTicket;
  }

  displayProducts = false;
  onClickProducts() {
    //this.displayProducts = true;
    /*if you want the component to show and hide on click pressed, use
    use this line*/
    this.displayProducts = !this.displayProducts;
  }
}
