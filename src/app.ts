import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <nav>
      <a linkTo="/">Collection</a>
      <a linkTo="/book/add">Add Book</a>
    </nav>
    <route-view></route-view>
  `
})
export default class App { }
