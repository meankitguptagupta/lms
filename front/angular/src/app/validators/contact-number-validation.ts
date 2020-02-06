import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ContactNumberValidation {

    /**
     * Method to validate contact number
     * @param control 
     */
    static contactNumber(control:AbstractControl):ValidationErrors | null {
        if(!(/^[\d]{10}/.test(control.value))) {
            return {contact_number: true}
        }
        return null;
    }
}