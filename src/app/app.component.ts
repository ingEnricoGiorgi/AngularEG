
import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public cookie_name='cart';
  public all_cookies:any='1';


constructor(private cookieService:CookieService) { }

  setCookie(){
    this.cookieService.set('cartcookie','cartcookiecontenuto');
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
