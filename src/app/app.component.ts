
import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Globals } from 'src/app/global';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{


   //public numberProduct:number=0;

constructor() {

}




  ngOnInit(): void {


  }

  displayProducts = false;
  displayTicket = false;
  onClickTicket() {
    this.displayProducts = false;
    //this.displayTicket = true;
    /*if you want the component to show and hide on click pressed, use
    use this line*/
    this.displayTicket = !this.displayTicket;

  }


  onClickProducts() {
    this.displayTicket = false;
    //this.displayProducts = true;
    /*if you want the component to show and hide on click pressed, use
    use this line*/
    this.displayProducts = !this.displayProducts;
  }
}
