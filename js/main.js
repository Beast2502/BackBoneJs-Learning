
let Mehul = new Person({
    'person_id' : 111,
    'name' : 'Mehul'
});

let WorkContact = new Contact({
    contact_id : 555,
    personId : 111,
    type: 'Office',
    phone : 123456789,
    email : 'mehulsaxena45@gmail.com'
});

let XYZ = new Person({
    'person_id' : 123,
    'name' : 'XYZ'
});

let WorkContactXYZ= new Contact({
    contact_id : 555,
    personId : 111,
    type: 'Office',
    phone : 123456789,
    email : 'mehulsaxena45@gmail.com'
});


console.log(Mehul.toJSON());
Mehul.set('officeContact' , WorkContact.toJSON());
Mehul.set('homeContact' , WorkContactXYZ.toJSON())
console.log(Mehul.toJSON())


AllPerson.add(XYZ);
AllPerson.add(Mehul);
console.log(AllPerson.toJSON());


AllContacts.add(WorkContact);
AllContacts.add(WorkContactXYZ);
console.log(AllContacts.toJSON())
