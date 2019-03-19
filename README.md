# javascript-lab1-part1
GS_07 - contact list - part 1, console output only

## JAVASCRIPT ADDRESS BOOK LAB PART 1
Task: Build an object-oriented console address book application.

The AddressBook() class:

Properties

● contacts: an array of Contact instances. This is initialized with a few contacts in the
constructor.

Methods

● add(info): Makes a new Contact instance and adds it to this AddressBook’s contacts.
● deleteAt(index): Removes the contact at the given array index in this AddressBook’s
contacts.
● print(): Logs all of this AddressBook’s contacts to the console.

The Contact class:

The class has a name, email, phone, and relation property. All four can be set by passing
them into the constructor.

Build Specifications:
1. Create the AddressBook and Contact classes. Create one instance of AddressBook.
2. Write a loop to prompt the user whether they would like to add, delete, print, or quit.
a. When the user chooses to add, prompt them for the four contact properties
and call the AddressBook’s add method to add the new contact.
b. When the user chooses to delete, prompt them for the index of the contact and
call the AddressBook’s deleteAt method to remove the contact.
c. When the user chooses to print, call the AddressBook’s print method.
d. When the user chooses to quit, end the program.

Bonus:
Add a deleteByName method to AddressBook and use it in the loop. deleteByName(name)
removes the contact with the given name from this AddressBook’s contacts.
