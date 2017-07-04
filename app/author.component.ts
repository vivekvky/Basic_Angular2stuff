import { Component } from 'angular2/core';
import { AuthorService } from './author.service';
import {SummaryPipe} from './summary.pipe';


@Component({
    selector: 'author',
    template: `<h2>Authors</h2>
    {{title | summary:22}}
    <ul>
    <li *ngFor="#author of authors">{{author}}</li>
    </ul>
    `,
    providers: [AuthorService],
    pipes:[SummaryPipe]
})
export class AuthorComponent {
    title = "Title for the authors page are very famous and they are known for their unqiue way of writings";
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}