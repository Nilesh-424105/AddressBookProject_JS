// importing PersonaleInformation and RegexPattern class file is in AddressBook class file
const PersonalInformation = require("./PersonalInformation.js");
const pattern = require("./RegexPattern.js");
const read = require('readline-sync');
var contactList = new Array();
var personData = new PersonalInformation();
const fs = require('fs');

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
    }

    // read contact data
    readContact() {
        return contactList
    }

    // Edit contact is in AddressBook
    editContact() {
        let edit = read.question("Enter the Name Of The Contact would be Update: ");
        console.log(edit);
        // let contactToBeUpdated = contactList.findIndex(x => x.firstName == updateContact);
        let option = (parseInt)(read.question("Pleaze Enter \n 1.FirstName \n 2.LastName \n 3.City \n 4.State \n 5.PinCode \n 6.PhoneNumber\n Enter Your Option: "));

        switch (option) {
            case 1:
                //  let contactToBeUpdated = contactList.find(x => x.setfirstName() == updateContact);
                // let updateContacts = read.question("plz enter the new name to change: ");
                //  contactToBeUpdated.firstName;
                //  console.log(updateContacts);
                let fName = read.question("Enter the First Name Of The Contact: ");
                let updateFName = read.question("plz enter the new First Name to be Change: ");
                let fNameToBeUpdated = contactList.findIndex(x => x.firstName == fName)
                contactList[fNameToBeUpdated].firstName = updateFName;
                break;
            case 2:
                let lName = read.question("Enter the Last Name Of The Contact: ");
                let updateLName = read.question("plz enter the new Last Name to be change: ");
                let lNameToBeUpdated = contactList.findIndex(x => x.lastName == lName)
                contactList[lNameToBeUpdated].lastName = updateLName;
                break;
            case 3:
                let cityName = read.question("Enter the city Of The Contact: ");
                let updateCity = read.question("plz enter the new city to be change: ");
                let cityToBeUpdated = contactList.findIndex(x => x.city == cityName)
                contactList[cityToBeUpdated].city = updateCity;
                break;
            case 4:
                let stateName = read.question("Enter the state Of The Contact: ");
                let updateState = read.question("plz enter the new state to be change: ");
                let stateToBeUpdated = contactList.findIndex(x => x.state == stateName)
                contactList[stateToBeUpdated].state = updateState;
                break;
            case 5:
                let pin = read.question("Enter the pinCode Of The Contact: ");
                let newPin = read.question("plz enter the new pinCode to be change: ");
                let pinToBeUpdated = contactList.findIndex(x => x.pinCode == pin)
                contactList[pinToBeUpdated].pinCode = newPin;
                break;
            case 6:
                let mob = read.question("Enter the PhoneNumber Of The Contact: ");
                let newMob = read.question("plz enter the new PhoneNumber to be change: ");
                let mobToBeUpdated = contactList.findIndex(x => x.phoneNumber == mob)
                contactList[mobToBeUpdated].phoneNumber = newMob;
                break;
        }
    }

    // Delete Contact Data
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
}

// Exports AddressBook file is in AddressBookManager
module.exports = AddressBook;
