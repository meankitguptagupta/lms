module.exports = (contact_number) => {
    let regex = /^\d{10}$/;
    return regex.test(contact_number);
}