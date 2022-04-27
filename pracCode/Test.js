// const name = "Mike";
// const message = 'My name is ${name}';
// const message2 = "My name is ${name}";

// console.log(message);
// console.log(message2);

// console.log(Number("1234"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));

// function sayHello(name) {
//     console.log(name);
//     let msg = `Hello`;
//     if(name) {
//         msg = `hello, ${name}`;
//     }
//     console.log(msg);
// }

// sayHello();      

// function showError() {
//     console.log("error");
// }

// showError();

// showError();

// let showError = function(){
//     // 모시깽이
//     return;
// }

const superman = {
    name : 'Clark',
    age : 30,
}

superman.hairColor = 'black';
superman['hobby']= 'football';

console.log(superman.name);
console.log(superman['age']);
console.log(superman);
console.log(superman.hobby);