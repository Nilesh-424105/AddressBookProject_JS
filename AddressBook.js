// importing PersonaleInformation and RegexPattern class file is in AddressBook class file
const PersonalInformation = require("./PersonalInformation.js");
const pattern = require("./RegexPattern.js");
const read = require('readline-sync');
var contactList = new Array();
var personData = new PersonalInformation();
const fs = require('fs');
const { count } = require("console");

// Read Data From Address.json file
function readFileData() {
    let readData = fs.readFileSync('./Address.json', 'utf8');
    let myObject = JSON.parse(readData);
    return myObject;
}

// Write Data in Address.json file
function writeFileData(myObject) {
    let writeData = JSON.stringify(myObject);
    return fs.writeFileSync('./Address.json', writeData);
}

class AddressBook {

    // Insert Contact Data is in AddressBook 
    insert() {
        // Ability to add values to the AddressBook
        // var personData = new PersonalInformation();
        // var pattern = new Regpattern();
        // Ability to add user-defined values to the AddressBook
        // personData.firstName = pattern.checkRegexForName(read.question("Enter First Name: "));
        // if(((personData.firstName=(pattern.checkRegexForName(read.question("Enter First Name: ")) != true)))){
        //      pattern.checkRegexForName(read.question("Enter First Name: "));
        // }
        // else{
        //     console.log("Pleaze Enter First Name Again")
        //     personData.firstName = pattern.checkRegexForName(read.question("Enter First Name: "));
        // }

        // Ability to add user-defined values to the AddressBook
        try {
        personData.firstName = read.question("Enter First Name: ");
        pattern.checkRegexForName(personData.firstName);
        personData.lastName = read.question("Enter Last Name: ");
        pattern.checkRegexForName(personData.lastName);
        personData.landmark = read.question("Enter Landmark: ");
        personData.city = read.question("Enter City: ");
        pattern.checkRegexForName(personData.city);
        personData.state = read.question("Enter State: ");
        pattern.checkRegexForName(personData.state);
        personData.pinCode = read.question("Enter PinCode: ");
        pattern.checkRegexForPinCode(personData.pinCode);
        personData.phoneNumber = read.question("Enter PhoneNumber: ");
        pattern.checkRegexForMobile(personData.phoneNumber);
        personData.email = read.question("Enter Email: ");
        pattern.checkRegexForEmail(personData.email);
        personData.gender = read.question("Enter Gender: ");
        personData.profession = read.question("Enter Profession: ");
        // console.log(personData.toString());
        contactList.push(personData);
        let myJson = readFileData();
        myJson.push(personData);
        writeFileData(myJson);
        return contactList;
        }catch(e){
            console.error(e);
        }
    }

    // read contact data
    readContact() {
        let myJson = readFileData();
        return myJson
    }

    // Edit contact is in AddressBook
    editContact() {
        let edit = read.question("Enter the Name Of The Contact would be Update: ");
        console.log(edit);
        // let contactToBeUpdated = contactList.findIndex(x => x.firstName == updateContact);
        let myJson = readFileData();
        let option = (parseInt)(read.question("Pleaze Enter \n 1. FirstName \n 2. LastName \n 3. City \n 4. State \n 5. PinCode \n 6. PhoneNumber\n 7. Landmark\n 8. Email\n 9. Gender\n 10. Profession\n Enter Your Choise: "));

        switch (option) {
            case 1:
                //  let contactToBeUpdated = contactList.find(x => x.setfirstName() == updateContact);
                // let updateContacts = read.question("plz enter the new name to change: ");
                //  contactToBeUpdated.firstName;
                //  console.log(updateContacts);
                let fName = read.question("Enter the First Name Of The Contact: ");
                let updateFName = read.question("plz enter the updated First Name to be Change: ");
                let fNameToBeUpdated = myJson.findIndex(x => x.firstName == fName)
                myJson[fNameToBeUpdated].firstName = updateFName;
                break;
            case 2:
                let lName = read.question("Enter the Last Name Of The Contact: ");
                let updateLName = read.question("plz enter the updated Last Name to be change: ");
                let lNameToBeUpdated = myJson.findIndex(x => x.lastName == lName)
                myJson[lNameToBeUpdated].lastName = updateLName;
                break;
            case 3:
                let cityName = read.question("Enter the city Of The Contact: ");
                let updateCity = read.question("plz enter the updated city to be change: ");
                let cityToBeUpdated = myJson.findIndex(x => x.city == cityName)
                myJson[cityToBeUpdated].city = updateCity;
                break;
            case 4:
                let stateName = read.question("Enter the state Of The Contact: ");
                let updateState = read.question("plz enter the updated state to be change: ");
                let stateToBeUpdated = myJson.findIndex(x => x.state == stateName)
                myJson[stateToBeUpdated].state = updateState;
                break;
            case 5:
                let pin = read.question("Enter the pinCode Of The Contact: ");
                let newPin = read.question("plz enter the updated pinCode to be change: ");
                let pinToBeUpdated = myJson.findIndex(x => x.pinCode == pin)
                myJson[pinToBeUpdated].pinCode = newPin;
                break;
            case 6:
                let mob = read.question("Enter the PhoneNumber Of The Contact: ");
                let newMob = read.question("plz enter the updated PhoneNumber to be change: ");
                let mobToBeUpdated = myJson.findIndex(x => x.phoneNumber == mob)
                myJson[mobToBeUpdated].phoneNumber = newMob;
                break;
            case 7:
                let land = read.question("Enter the LandMark Of The Contact: ");
                let newLand = read.question("plz enter the updated LandMark to be change: ");
                let landmarkToBeUpdated = myJson.findIndex(x => x.landmark == land)
                myJson[landmarkToBeUpdated].landmark = newLand;
                break;
            case 8:
                let mail = read.question("Enter the Email Of The Contact: ");
                let newMail = read.question("plz enter the updated Email to be change: ");
                let emailToBeUpdated = myJson.findIndex(x => x.email == mail)
                myJson[emailToBeUpdated].email = newMail;
                break;
            case 9:
                let gen = read.question("Enter the Gender Of The Contact: ");
                let newGender = read.question("plz enter the updated Gender to be change: ");
                let genderToBeUpdated = myJson.findIndex(x => x.gender == gen)
                myJson[genderToBeUpdated].gender = newGender;
                break;
            case 10:
                let prof = read.question("Enter the Profession Of The Contact: ");
                let newProfession = read.question("plz enter the updated Profession to be change: ");
                let professionToBeUpdated = myJson.findIndex(x => x.profession == prof)
                myJson[professionToBeUpdated].profession = newProfession;
                break;
        }
        writeFileData(myJson);
    }

    // Delete Contact By FirstName
    deleteContact() {
        // let updateContact = read.question("Enter the First Name Of The Contact: ");
        // // let contactToBeUpdated = this.contactList.find(x.getFirstName() == updateContact);
        // contactList = this.contactList.filter(x => x.getfirstName() !== contactToBeUpdated);
        // //   this the way to remove the object , we cant directly delete it we have to put objects in nnew contactList exclude what we want 
        // let fName = read.question("Enter the First Name of the Contact : ");
        // contactList.forEach(contact => {
        //     console.log("hello");
        //     if ((contact.firstName === fName) == true) {
        //         let index = contactList.indexOf(fName);
        //         contactList.splice(index, 1);
        //         console.log("Contact is deleted");
        //     }
        //     else {
        //         console.log("No contact present with this name!");
        //     }
        // });
        let fName = read.question("Enter the First Name of the Contact : ");
        let myJson = readFileData();
        for (let index = 0; index < myJson.length; index++) {
            if ((myJson[index].firstName == fName)) {
                myJson.splice(index, 1);
            }
        }
        writeFileData(myJson);
        console.log("Contact is deleted");
    }

    // Search Contacts By City OR State
    searchContact() {
        let myJson = readFileData();
        let option = parseInt(read.question("Please Enter\n 1. Search by City\n 2. Search by State\n Enter your choice : "));

        switch (option) {
            case 1:
                let city = read.question("Enter the City you want to search the person By Same City : ");
                myJson.forEach(contact => {
                    if (contact.city == city) {
                        console.log(contact);
                    }
                });
                break;
            case 2:
                let state = read.question("Enter the State you want to search the person By Same State : ");
                myJson.forEach(contact => {
                    if (contact.state == state) {
                        console.log(contact);
                    }
                });
                break;
            default:
                console.log("You have entered invalid input!");
                break;
        }
    }

    // Count Number Of Contact By City OR State
    countContact() {
        let myJson = readFileData();
        let option = (parseInt)(read.question("Pleaze Enter\n 1. Count Contact By City\n 2. Count Contact By State\n Enter Your Choise: "));
        let count = 0;

        switch(option) {
            case 1:
                let city = read.question("Enter the City You Want To Count Person By Same City: ");
                myJson.forEach(contact => {
                    if(contact.city == city){
                        count++;
                    }
                });
                console.log("Number of Contacts By Same City is: " ,count);
                break;
            case 2:
                let state = read.question("Enter the State You want to Count Person By Same State: ");
                myJson.forEach(contact => {
                    if(contact.state == state) {
                        count++;
                    }
                });
                console.log("Number of Contacts By Same State is: " ,count);
                break;
            default :
                console.log("You have Enter Invalid Input!")
        }
    }
}

// Exports AddressBook file is in AddressBookManagement file
module.exports = AddressBook;
