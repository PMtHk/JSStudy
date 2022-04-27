let n = "name";
let a = "age";

const user = {
    [n] : 'PMtHk',
    [a] : 25,
    [1+4] : 5, // 계산식도 가능
}

console.log(user);

//좀더 실용적으로!

function makeObj(key, val){
    return {
        [key] : val
    }
}
// 키 값이 어떤 것이 될지 모를 때 유용하게 쓸 수 있다.

const obj = makeObj("나이", 25);
console.log(obj);