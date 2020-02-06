import { ContactNumber } from 'src/app/contracts/contact-number';

export interface Signup {
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    contact_number: ContactNumber
}