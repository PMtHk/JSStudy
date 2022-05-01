// 나머지 매개변수

function add(...numbers){
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}

// 이전에 배운 reduce도 이용할 수 있다.
function add_w_reduce(...numbers) {
    let result1 
        = numbers.reduce((prev, cur) => prev + cur);
    console.log(result1);
}

add_w_reduce(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

// numbers가 배열이기 때문에, for문을 사용해도 된다.
// forEach 역시 사용할 수 있다.


/*
    나머지 매개변수를 가지고 더 실용적인 예제
    user객체를 만들어 주는 생성자 함수
*/

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);