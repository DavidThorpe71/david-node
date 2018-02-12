var square = x => x * x;
console.log(square(9));

var User = {
    name: 'David',
    sayHi: () => {
        console.log('Hi!');
    },
    sayHiAlt () {
        console.log(`hi! I'm ${this.name}`);
    }
};

User.sayHiAlt();
