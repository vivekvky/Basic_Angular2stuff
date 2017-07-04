import { Component } from 'angular2/core';
import {FrequenciesService} from './frequencies.service';


@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.html',
    providers:[FrequenciesService]

})


export class ContactFromComponent {
frequencies;

constructor(freqiencies: FrequenciesService){
    this.frequencies=freqiencies.getFrequencies();
}

    onSubmit(f) {
        console.log(f);
    }
}