function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
};

const adam = new Person("Adam", 30);
console.log({adam});

const eve = new Person('Eve',20);
console.log({eve});

eve.children = ['Abel', 'Cain', 'Seth'];
console.log({eve});
console.log({adam});

Person.prototype.nationality = 'Kenyan';
console.log("adam-nationality",adam.nationality);
console.log({adam})

eve.nationality = 'Ugandan';
console.log({eve})
console.log(eve.nationality)
eve.greet()