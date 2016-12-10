function add (a, b) {
    return a + b;
}
console.log('Primitive:', add(3,1));
var toAdd = [9,5];
console.log('Array index:', add(toAdd[0], toAdd[1]));
console.log('Spread:', add(...toAdd));
var groupA = ['James', 'Dara'];
var groupB = ['Abu', 'Chester'];
var final = [3, ...groupA, ...groupB];
console.log(final);
console.log(add(...groupA));

var person = ['Andrew', 25];
var person2 = ['Jon', 29];

function hi(name, age) {
    console.log("Hi " + name + ", you are " + age);
}
hi(...person);
hi(...person2);

var names = ['Mike', 'Ben'];
var final = ['James'];

var combinedArray = [...names, ...final];

combinedArray.forEach((element) => {
    console.log("Name: " + element);
});

var combinedNames = [person, person2];
console.log(combinedNames);
combinedNames.forEach((arrayElement) => {
    console.log("Hello " + arrayElement[0] + ", you are " + arrayElement[1]);
});