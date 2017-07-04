import { Control } from 'angular2/common';

export class NoSpaceValidator {

    static shouldbeUnique(control: Control) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (control.value === "vivek") 
                    resolve({ shouldbeUnique: true });
                else 
                    resolve(null);
            }, 1000);
        })

    }

    static spaceValidator(control: Control) {
        if (control.value.indexOf(' ') >= 0) {
            return { nospacevalidator: true }
        }
        else {
            return null
        }
    }
}


