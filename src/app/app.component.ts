
import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public cookie_name='cartcookie';
  public all_cookies:any='1';

   //public numberProduct:number=0;

constructor(private cookieService:CookieService) {
  var numberProduct;
}


    getCookie(cookien:string){
      return this.cookieService.get(cookien);
    }

    setCookie(){
    var myCookie = this.cookieService.get("cartcookie");

    if (myCookie == null) {
        // do cookie doesn't exist stuff;
        this.numberProduct=0;
    }
    else {
        // do cookie exists stuff
        numberProduct += numberProduct;
    }

    this.cookieService.set('cartcookie', numberProduct.toString());
  }

  deleteCookie(){
    this.cookieService.delete('cartcookie');
  }
  deleteAll(){
    this.cookieService.deleteAll();
  }

  ngOnInit(): void {
    this.cookie_name=this.cookieService.get('cartcookie');
    this.all_cookies=this.cookieService.getAll();  // get all cookies object

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
