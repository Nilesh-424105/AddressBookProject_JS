// importing AddressBook class file is in AddressBookManagement class file
const AddressBook = require("./AddressBook.js");
const read = require('readline-sync');
let addressBook = new AddressBook();
flag = true;

while (flag) {
    console.log("1. Insert contacts in Address Book");
    console.log("2. Display the list of contact");
    console.log("3. Edit contacts in Address Book");
    console.log("4. Delete contacts in Address Book");
    console.log("5. to exit");
    let option = parseInt(read.question("Enter your choise: "));

    switch(option) {
        case 1:
            console.log("welcome to addressbook")
                addressBook.insert();
            break;
        case 2:
            console.log(addressBook.readContact());
            break;
        case 3:
            addressBook.editContact();
            break;
        case 4:
           addressBook.deleteContact();
            break;
        case 5:
            flag = false;
            console.log("Exit From AddressBook")
            break;
        default:
            console.log("You have entered invalid input!");    
            break;

    }
}