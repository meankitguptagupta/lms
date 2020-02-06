import { ContactNumber } from "../contracts/contact-number";

class ContactNumberField implements ContactNumber {
    constructor(private contactNumber:string) { }

    isContactNumber():boolean {
        return (/^[\d]{10}/m).test(this.contactNumber)
    }
}