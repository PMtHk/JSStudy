// 다른 개발자가 만들어 놓은 객체
const user  = {
    name : 'PMtHk',
    age : 25,
};

// 내가 작업
// user.showName = function () {}; 
// 위와 같이 쓰면 사용자는 이상한 메시지를 보게 된다.
const showName = Symbol('show name');
user[showName] = function () {
    console.log(this.name);
};

user[showName]();
// 이미 만들어진 객체를 수정하지 않고 활용할 수 있는 장점이 있다!


// 사용자가 접속하면 보는 메세지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`);
}