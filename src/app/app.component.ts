import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
  name: string;
  response: any = [];
  
  getProducts () {
  this.http.get('https://demo3062546.mockable.io/products')
  .subscribe((response) => {
    this.response = response["products"];
  })
  }

    constructor( private http: HttpClient) {
      this.getProducts()
  }

  filterProducts (): void {
    if(this.name === ''){
      this.getProducts()
    }else{
    this.http.get('https://demo3062546.mockable.io/products')
    .subscribe((response) => {
      this.response = response["products"].filter(el => el.name.includes(this.name));
    })
    }
  }
}

