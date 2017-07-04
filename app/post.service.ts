import { Http } from 'angular2/http'
import 'rxjs/add/operator/map'
import { Injectable } from 'angular2/core'
import { PostProperties } from './post.properties'
import {Observable} from 'rxjs/Rx'

@Injectable()
export class PostService {

    private _url = "http://jsonplaceholder.typicode.com/posts"
    constructor(private _http: Http) {

    }
    getService():Observable<PostProperties[]> {
        return this._http.get(this._url)
            .map(res => res.json())
    }

    createService(post: PostProperties) {
        this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}