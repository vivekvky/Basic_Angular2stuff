import { Component, Input } from 'angular2/core';
// import { LocalStorage, SessionStorage } from "angular2-localstorage";



@Component({
    selector: 'star',
    template: `
  <i
  class="glyphicon"
  [class.glyphicon-star-empty]="!isFavorite"
  [class.glyphicon-star]="isFavorite"
  (click)= "onClick()">
  </i>
  `,
    inputs: ['isFavorite']

})

export class StarComponent {
    isFavorite = false;
    //  @LocalStorage('username') public username: string;
    onClick() {
        this.isFavorite = !this.isFavorite;
        //  this.username = 'hello world';
        // console.log('username', this.username);
        // it prints username hello world

    }

}