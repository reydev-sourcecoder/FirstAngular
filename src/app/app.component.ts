import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './product/product-list.component.html',
  template: `
    <div>
      <h1>{{title}}</h1>
      <ba-products></ba-products>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beginning Angular';
}
