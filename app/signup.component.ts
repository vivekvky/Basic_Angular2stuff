import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { NoSpaceValidator } from './nospacevalidator';

@Component({
    selector: 'sign-up',
    templateUrl: './app/signup.html',

})


export class SignupComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([Validators.required, NoSpaceValidator.spaceValidator]), NoSpaceValidator.shouldbeUnique],
            password: ['', Validators.required]
        })
    }

    //--------------- creating form validation with new key word---------------------//
    // form = new ControlGroup({
    //     username:new Control('',Validators.required),
    //     password:new Control('',Validators.required)
    // })
    
    onSubmit() {
        this.form.find('username').setErrors({
            invalidlogin: true,
        })
        console.log(this.form.value);
    }
}