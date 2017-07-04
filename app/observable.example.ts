import {Component} from 'angular2/core'
import {Observable} from 'rxjs/Rx'

@Component({
    selector:'observable-example',
    template:`
       <input type="text" class="form-control" id="firstName" >
    `
})

export class ObservableExampleComponent{
    constructor(){
        var keystroke = Observable.fromEvent(document.getElementById("firstName"),"keyup");
        keystroke.subscribe(data=>console.log(data))
        
    }
}