////////////  MODALS ////////////
let PersonModel = Backbone.Model.extend({
    defaults : {
        active: false
    },
    validate : function(attrs){
        if(!attrs.name){
            return "Name is required";
        }
    }
});
let MobileNumber = Backbone.Model.extend();


let Person1 = new PersonModel();
Person1.set({
    name: 'XYZ'
});

console.log(Person1.toJSON());
Person1.set({
    active : true
})
console.log(Person1.toJSON());


// check the validation 
let Person2 = new PersonModel();
// it will return false as the name is not assigned to the function
console.log(Person2.isValid());
console.log(Person2.validationError);


// inheritance

let Animal = Backbone.Model.extend({
    walk : function(){
        console.log(" Animal is walking ....")
    }
})


let Dog = Animal.extend({
    walk : function(){
        Animal.prototype.walk.apply(this);   // Access the method of the base class
        console.log("Dog is walking ....");
    }
});

let dog = new Dog();
dog.walk();