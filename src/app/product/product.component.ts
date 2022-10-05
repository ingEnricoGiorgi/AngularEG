import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Globals } from 'src/app/global';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  public cookie_name='';
  public all_cookies:any='';
  //public expiredDate:Date;
  constructor(public cookieService:CookieService, public globals: Globals) {

  }


      getCookie(cookien:string){
        return this.cookieService.get(cookien);
      }

      setCookie(){
      var myCookie = this.cookieService.get("cartcookie");
      //console.log('expire date'+ myCookie);
      if (myCookie == null) {
          // do cookie doesn't exist stuff;
          this.globals.numberProduct=0;
          const myDate: Date = new Date();

          //setto la duraat del cookie a 1 ora
          myDate.setHours( myDate.getHours() + 1 );
          this.cookieService.set('cartcookie', this.globals.numberProduct.toString(), myDate)

      }
      else {
          // do cookie exists stuff

          this.globals.numberProduct+=1;

      }
      //console.log('numberProduct', this.globals.numberProduct.toString());
      const now = new Date();
      now.setHours(now.getHours() + 8);

      this.cookieService.set('cartcookie', this.globals.numberProduct.toString());

    }

    deleteCookie(){
      this.cookieService.delete('cartcookie');
      this.globals.numberProduct=0;
    }
    deleteAll(){
      this.cookieService.deleteAll();
      this.globals.numberProduct=0;
    }


//nginit
  ngOnInit(): void {
    this.product = [
      new Product("john",  5000, 1),
      new Product("Ram",  6000 , 2),
      new Product("Fran",  10000, 3),
    ];
    this.cookie_name=this.cookieService.get('cartcookie');
    this.all_cookies=this.cookieService.getAll();  // get all cookies object

  }
  display = false;
  onPress() {
    //this.display = true;
    /*if you want the component to show and hide on click pressed, use
    use this line*/
    this.display = !this.display;
  }

}
