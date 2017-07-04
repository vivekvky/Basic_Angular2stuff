import { Component, Input, EventEmitter, Output } from 'angular2/core';
// import { LocalStorage, SessionStorage } from "angular2-localstorage";

@Component({
    selector: 'vote',
    template: `
    <div class="voter">
    <i
    class="glyphicon glyphicon-menu-up vote-button"
    [class.highlighted]="myVote == 1"
    (click)="upVote()">
    </i>
    <span class="vote-count">{{voteCount + myVote}}</span>
    <i
     class="glyphicon glyphicon-menu-down vote-button"
    [class.highlighted]="myVote == -1"
    (click)="downVote()">
    </i>
    </div>
    `,
    styles: [
        `
    .voter{
        width:20px;
        text-align:center;
        color:#999;
    }
    .vote-count{
        font-size:1.2em;
    }
    .vote-button{
        cursor:pointer;
    }
    .highlighted{
        font-weight:bold;
        color:orange;   
    }
    `
    ],
    inputs: ['voteCount', 'myVote'],
    outputs: ['vote']
})

export class VoteComponent {

    // @LocalStorage('username') public username: string;
    // voteCount = 0;
    myVote = 0;
    vote = new EventEmitter();
    upVote() {
        if (this.myVote == 1)
            return;
        this.myVote++;
        this.vote.emit({ myVote: this.myVote });
        // console.log(this.username);

    }

    downVote() {
        if (this.myVote == -1)
            return;
        this.myVote--;
        this.vote.emit({ myVote: this.myVote });
    }

}