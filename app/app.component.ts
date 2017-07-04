import { Component, OnInit } from 'angular2/core';
import { CourseComponent } from './course.component';
import { AuthorComponent } from './author.component';
import { StarComponent } from './star.component';
import { VoteComponent } from './vote.component';
import { StarNgClass } from './star.ngclass.component';
import { ContactFromComponent } from './contact-form.component'
import { SignupComponent } from './signup.component'
import { ConfirmPasswordComponent } from './confirm-passoword.component'
import { ObservableExampleComponent } from './observable.example'
import { PostService } from './post.service'
import { HTTP_PROVIDERS } from 'angular2/http'

@Component({
    selector: 'my-app',
    // template: `
    // <vote [voteCount]="10" [myVote]="vote.myvote"></vote>
    // <starngclass [isFavorite]="post.isFavorite"></starngclass>
    // <star [isFavorite]="post.isFavorite"></star>
    // <h1>My First Angular 2 App, Hello World</h1>
    // <course></course>
    // <author></author>`,
    // directives: [CourseComponent, AuthorComponent, ObservableExampleComponent, StarComponent, VoteComponent, StarNgClass, ConfirmPasswordComponent, ContactFromComponent, SignupComponent],
    providers: [PostService, HTTP_PROVIDERS],
    template: `
    <div *ngIf="isLoading">
    <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
`,
    // template: '<contact-form></contact-form>',
    // template: '<confirm-password></confirm-password>',
    // template:`<observable-example></observable-example>`
    //directives: [ContactFromComponent, SignupComponent]

})
export class AppComponent implements OnInit {

    isLoading = true

    constructor(private _postservice: PostService) {
        this._postservice.createService({ userid: 1, title: "hello", body: "This is first service" });
    }

    ngOnInit() {
        this._postservice.getService()
            .subscribe(posts => {
                this.isLoading = false
                console.log(posts[0].body)
            })

    }

    vote = {
        count: 10,
        myvote: 0
    };
    post = {
        title: 'Title',
        isFavorite: true
    };

}