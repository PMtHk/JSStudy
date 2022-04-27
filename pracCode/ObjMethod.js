const user = {
    name : "PMtHk",
    age : 25,
};

const user2 = user; // 이렇게 하면 동일하게 user객체에 접근하는 user2 가 된다.
user2.name = "zooby";

console.log(user);
console.log(user2);
// 같이 zooby가 출력된다.

const user3 = Object.assign({}, user);
user3.name = "PMtHk";

console.log(user2);
console.log(user3); 
// 두 개가 다르게 출력됨을 알 수 있다.
// 다른 객체가 두 개가 있다.

const resultKeys = Object.keys(user);
console.log(resultKeys);

const resultValues = Object.values(user);
console.log(resultValues);

const resultEntries = Object.entries(user);
console.log(resultEntries);

let arr = [
    ["mon", "월"],
    ["tue", "화"],
    ["wed", "수"],  // 앞이 keys 뒤가 values
]

const result = Object.fromEntries(arr);
console.log(result);