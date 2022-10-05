
import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Globals } from 'src/app/global';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public cookie_name='cartcookie';
  public all_cookies:any='1';

   //public numberProduct:number=0;

constructor(private cookieService:CookieService, private globals: Globals) {

}


    getCookie(cookien:string){
      return this.cookieService.get(cookien);
    }

    setCookie(){
    var myCookie = this.cookieService.get("cartcookie");

    if (myCookie === null) {
        // do cookie doesn't exist stuff;
        this.globals.numberProduct=0;
    }
    else {
        // do cookie exists stuff
        //global.numberProduct += numberProduct;
        this.globals.numberProduct+=1;
    }

    this.cookieService.set('cartcookie', this.globals.numberProduct.toString());
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
