/* 
    전개구문
    arr1 을 [4,5,6,1,2,3]으로 만들기
*/

let arr1 = [1,2,3];
let arr2 = [4,5,6];

/*

arr2.forEach((num) => {
    arr1.unshift(num)
}) // 실패

arr2.reverse().forEach((num) => {
    arr1.unshift(num)
}) // 성공
*/

let result = [...arr2, ...arr1];
// 간단히 성공!
console.log(result);

/*******************
 * 객체의 경우
 ******************/

let user = { name: "Mike" };
let info = { age: 30 };
let fe = [ "JS", "React" ];
let lang = [ "Korean", "English" ];

// 전개구문 없이
user = Object.assign({},
    user,
    info,
    {
        skills : [],
    });
    
fe.forEach((item) => {
    user.skills.push(item);
})
lang.forEach((item)=> {
    user.skills.push(item);
})

user1 = {
    ...user,
    ...info,
    skills : [...fe, ...lang],
}


console.log(user);
console.log(user1);

