import { Component, Input } from 'angular2/core';

@Component({
    selector: 'starngclass',
    template: `
<i
class="glyphicon"
[ngClass]="{
    'glyphicon-star-empty':!isFavorite,
    'glyphicon-star':isFavorite
}"
(click)="onClick()">
</i>
`,
inputs:['isFavorite']
})

export class StarNgClass {
    isFavorite = true;
    onClick() {
        this.isFavorite = !this.isFavorite;
    }

}

