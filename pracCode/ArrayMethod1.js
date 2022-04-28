// forEach
let users = ['Mike', 'Tom', 'Jane'];

users.forEach((name, index) => {
    console.log(`${index+1}. ${name}` );
});

// find
let arr = [1,2,3,4,5];

const result1 = arr.find( (item) => {
    return item % 2 === 0;
})
console.log(result1);


let userList = [
    { name:"Mike", age:30 },
    { name:"Jane", age:27 },
    { name: "Tom", age:10 },
]

//findIndex
const result2 = userList.findIndex( (item) => {
    if (item.age < 19) {
        return true;
    }
    return false;
});
console.log(result2);

// filter
const result3 = userList.filter( (item) => {
    if (item.age > 10) {
        return true;
    }
    return false;
});
console.log(result3);

// arr.map()
let newUserList = userList.map((user, index) => {
    return Object.assign({}, user , {
        id: index + 1,
        isAdult: user.age > 19,
    });
});
console.log(newUserList);
console.log(userList);

// join, split
let arr_join = ["안녕", "나는", "철수야"];
let result_join = arr_join.join(); 
    // 인자로 아무것도 전달되지 않으면 ,(comma)로 이어진다.
console.log(result_join);

const splittext = "Mike,Jane,Tome,Tony";
const result_split = splittext.split(",");
console.log(result_split)

// Array.isArray()
let user1 = {
    name: "Mike", 
    age: 30,
}

let userList1 = ["Mike", "Tom", "Jane"];
console.log(typeof user1);
console.log(typeof userList1);

console.log(Array.isArray(user1));
console.log(Array.isArray(userList1));