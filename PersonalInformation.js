const read = require("readline-sync");

class PersonalInformation {
    // property
    firstName;
    lastName;
    landmark;
    city;
    state;
    pinCode;
    phoneNumber;
    email;
    gender;
    profession;

    // firstName, lastName, landmark, city, state, pinCode, phoneNumber, email, gender, profession
    // constructor
    constructor(firstName, lastName, landmark, city, state, pinCode, phoneNumber, email, gender, profession) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.landmark = landmark;
        this.city = city;
        this.state = state;
        this.pinCode = pinCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.gender = gender;
        this.profession = profession;
    }

    // setters and getters
    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }

    get landmark() {
        return this._landmark;
    }

    set landmark(landmark) {
            this._landmark = landmark;
    }

    get city() {
        return this._city;
    }

    set city(city) {
            this._city = city;
    }

    get state() {
        return this._state;
    }

    set state(state) {
            this._state = state;
    }

    get pinCode() {
        return this._pinCode;
    }

    set pinCode(pinCode) {
            this._pinCode = pinCode;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
            this._phoneNumber = phoneNumber;
    }

    get email() {
        return this._email;
    }

    set email(email) {
            this.email = email;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
            this._gender = gender;
    }

    get profession() {
        return this._profession;
    }

    set profession(profession) {
            this._profession = profession;
    }

    // tostring
    toString() {
        return "firstName=" + this.firstName
            + "\n lastName=" + this.lastName
            + "\n landmark=" + this.landmark
            + "\n city=" + this.city
            + "\n state=" + this.state
            + "\n pincode=" + this.pinCode
            + "\n phoneNumber=" + this.phoneNumber
            + "\n email=" + this.email
            + "\n gender=" + this.gender
            + "\n profession=" + this.profession;
    }
}

//exporting PersonalInformation class file is in AddressBook class file
module.exports = PersonalInformation;


// let addressBook = new AddressBook('Nilesh', 'Kotkar', 'Mumbainaka', 'Nashik', 'Maharastra', 422010, '8766483622', 'nileshkotkar1996@gmail.com', 'Male', 'Developer');
// console.log(addressBook.toString());
