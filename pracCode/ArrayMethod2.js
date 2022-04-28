// arr.sort()
// 배열 재정렬
// 배열 자체가 변경되는 점에 주의하자
// 인수로 정렬 로직을 담은 함수를 받는다.

let arr1 = [1,5,4,2,3];
arr1.sort();
console.log(arr1); // 잘 작동한다.

let arr2 = [27,8,5,13];
arr2.sort();
console.log(arr2);
// 13, 27, 5, 8 로 정렬됨 -> ?
// 정렬 시 요소를 문자열로 취급하기 때문
// 1과 2로 시작하는 13, 27이 앞으로 오게된것이다.

function fn(a, b){
    return a -b;
}
arr2.sort(fn);
console.log(arr2);
// 이렇게 하면 정상 작동을 한다. 
// 보통은 함수를 이렇게 만들지 않고 Lodash같은 라이브러리를 이용한다.



// arr.reduce()
// 인수로 함수를 받음
// (누적 계산값, 현재값) => { return 계산값 };

// 배열의 모든수 합치기

let arr3 = [1,2,3,4,5];

const result1 = arr3.reduce((prev, cur) => {
    return prev + cur;
}, 0); // -> 0 은 초기값
console.log(result1);

let userList = [
    { name:"Mike", age: 30 },
    { name:"Tom", age: 10 },
    { name:"Jane", age: 27 },
    { name:"Sue", age: 26 },
    { name:"Harry", age: 42 },
    { name:"Steven", age: 60 },
];

let result2 = userList.reduce((prev, cur) => {
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev;
}, []);

let totalAge = userList.reduce((prev, cur) => {
    return prev + cur.age;
}, 0);

console.log(result2,totalAge);
