# JavaScript
## JavaScript 기초 공부를 위한 개인 페이지<br/>
참고한 유튜브: 코딩앙마님의 자바스크립트 중급 강좌 : 140분 완성<br/>
[![자바스크립트 중급 강좌 : 140분 완성](https://img.youtube.com/vi/4_WLS9Lj6n4/0.jpg)](https://www.youtube.com/watch?v=4_WLS9Lj6n4)

## **1. Variables(변수)**  
`let` 과 `const` ES6 부터 생긴 문법이다. 그 이전 JS에서는 `var` 사용.  
`var`와 `let`은 크게 다르지 않고, 대부분의 경우 둘을 바꿔 사용해도 문제되지 않는다.  
> `var`는 한번 선언된 변수를 다시 선언할 수 있다.
> ~~~javascript
> var name = 'PMtHk';
> console.log(name); // PMtHk
> 
> var name = 'zooby';
> console.log(name); // zooby
> ~~~  
`var`의 경우, 위와 같이 써도 문제되지 않지만, 위에서 `var`를 `let`으로 바꾸면 문제가 발생한다.  

> `var`는 선언하기 전에 사용할 수 있다.  
> ~~~javascript
> console.log(name); // undefined
> var name = 'PMtHk';
> console.log(name); // PMtHk  
> ~~~
`var`로 선언하는 모든 변수는 최상위로 끌어올려진 것처럼 동작한다. -> **호이스팅(Hoisting)**  
선언은 호이스팅 되지만 할당은 호이스팅 되지 않는다.  
  
`let`과 `const`의 경우도 호이스팅 된다.  

**호이스팅** : Scope 내부 어디서든 **변수 선언**은 최상위에 선언된 것 처럼 행동한다. (Scope단위로 일어난다.)
**TDZ(Temporal Dead Zone)** : 일시적 사각지대(?), Scope의 시작부터 초기화 시작 지점까지의 구간.
- 코드를 예측가능하게 한다.
- 잠재적인 버그를 줄일 수 있다.  

**변수의 생성과정**  
1. 선언 단계  
2. 초기화 단계 *(undefined 를 할당 해주는 단계)*
3. 할당 단계  

| var | let | const |  
| ---- | ---- | ----- |  
| 1. 선언 + 초기화 단계 | 1. 선언 단계| 1. 선언+초기화+할당 단계|
| 2. 할당 단계 | 2. 초기화 단계| |
| | 3. 할당 단계| |     

`var`는 선언 및 초기화가 동시에 되므로, 할당 전 호출 시 *undefined* (error 아님)  
`let`의 경우 초기화 단계가 실제 코드에 도달했을 때 진행, reference error 발생한다.  
`const` 선언+할당 동시에 되므로 값 변경도 불가하다.
> ~~~javascript
> var name;
> name = 'zooby';
> 
> var age;
> age = 30;
>
> const gender; // Missing initializer in const declaration
> gender = 'male'; // 따라서 error  

`var` : 함수 스코프( _function-scoped_ )  
`let`,`const` : 블록 스코프( _block-scoped_ )  

**함수 스코프**  
> 함수 내에서 선언된 변수만 그 지역변수가 된다.


**블록 스코프**  
> 모든 코드블록 내에서 선언된 변수는 코드블록 내에서만 유효하며, 코드블록 외부에서는 접근할 수 없다. 즉, 코드블록 내부에서 선언한 변수는 지역변수이다.  
> 함수, if 문, for 문, while 문, try/catch 문 등  

**var는 이제 사용하지 않는다.**  
<br/>

## **2. 생성자 함수**  
~~~javascript
function User(name, age) {            // 첫 글자는 대문자로
    this.name = name;
    this.age = age;
}

let user1 = new User('PMtHk', 25);    // new 연산자로 호출
let user2 = new User('zooby', 26);
let user3 = new User('najoo', 27);
~~~
위와 같이 빠르게 객체를 여러개 만들어 낼 수 있다.  

생성자 함수의 동작
~~~javascript
new 함수명(); 
~~~
을 실행하면

~~~javascript
function User(name, age){
  // this = {};        // 실제로는 코드에 존재하지 않는다.

  this.name = name;
  this.age = age;

  // return this;      // 실제로는 코드에 존재하지 않는다.
} // 위의 주석 부분은 'new' 연산자가 대신해준다.  
~~~


빈 객체가 생성후 _this_ 에 할당한다. 함수 본문을 실행하면서, _this_ 에 _property_ 들을 추가한다.(이 경우 _name_ 과 _age_ ) 마지막으로 _this_ 를 반환한다.  

~~~javascript
function User(name, age){
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(this.name); //this -> user5
  }
}
let user5 = new User('Na', 30);
user5.sayName();    // 출력 : Na
~~~
<br/>  

## **3. Object-Method, Computed Property**  

__Computed property__
> ~~~javascript
> let a = 'age';
>
> const user  = {
>     name : 'PMtHk',
>     age : 25,   // age 대신 [a] 가능 -> computed property
> }  
> ~~~  
> 식 자체를 넣는 것도 가능하다.
<br/>

__Object-method__<br/>
<details>
<summary> Object.assign() : 객체 복제 </summary>
<div markdown="1">

> 
> ~~~javascript
> const user = {
>     name : 'PMtHk',
>     age : 25
> }
> 
> const cloneUser = user;
> ~~~
> 위와 같이 하면, 복제가 되는 것이 아닌 객체가 대한 참조값이 할당된다.  
> 하나의 객체를 두 변수가 접근하고 있는 것이다.
> 
> 따라서, 아래와 같이 해야한다.
> ~~~javascript
> const newUser = Object.assign({}, user);
> /* {} + { name : 'PMtHk', age : 25 } = 
>           {
>               name : 'PMtHk',
>               age : 25,
>           }
> */
> ~~~
> 빈 객체를 생성한 후 user 객체가 병합된다.  
> Object.assign(param1, param2) 에서 param1의 객체에 param2의 객체를 병합하는 구조이다.  
> 병합시 같은 키값이 있다면, 덮어쓰기 된다. (param2 의 값으로)  
> 두개 이상의 객체도 병합할 수 있다.  
> 

</div>
</details>
  
<details>
<summary> Object.keys() : 키 배열 반환 </summary>
<div markdown="1">

> ~~~javascript
> const user = {
>      name : 'PMtHk',
>      age : 25,
>      gender : 'male',
> }
>
> Object.keys(user); 
> // [ "name", "age", "gender" ]
> ~~~
<br/>
</div>
</details>

<details>
<summary> Object.values() : 값 배열 반환 </summary>
<div markdown="1">

> ~~~javascript
> const user = {
>      name : 'PMtHk',
>      age : 25,
>      gender : 'male',
> }
>
> Object.keys(user); 
> // [ "PMtHk", "25", "male" ]
> ~~~
<br/>
</div>
</details>

<details>
<summary> Object.entries() : 키/값 배열 반환 </summary>
<div markdown="1">

> ~~~javascript
> const user = {
>      name : 'PMtHk',
>      age : 25,
>      gender : 'male',
> }
>
> Object.keys(user); 
> /* [ ["name", "PMtHk" ],
>      ["age", "25" ], 
>      ["gender", "male" ] ] */
> ~~~
<br/>
</div>
</details>

<details>
<summary> Object.fromEntries(): 키/값 배열을 객체로 만들기 </summary>
<div markdown="1">

> ~~~javascript
> const arr = 
> [ 
>     ["name", "PMtHk" ],
>     ["age", "25" ], 
>     ["gender", "male" ]
> ]
> 
> Object.fromEntries(arr);
> /* 
> {
>      name : 'PMtHk',
>      age : 25,
>      gender : 'male',
>  }   와 같은 객체를 생성한다.   
> */
<br/>
</div>
</details>  
<br/>

## **4. Symbol(심볼)**  

**property key : 문자형**  
> ~~~javascript
> const obj = {
>     1: "1입니다",
>     false : "거짓",
> } // 라고 해도
>
> Object.keys(obj); // ["1", "false"] 가 된다.
> 
> obj['1'] // "1입니다."
> obj['false'] // "거짓"
> // 실제로 접근할 때에도 문자열이나 문자로 접근할 수 있다.

**Symbol**  
- 유일한 식별자를 만들 때 사용한다.
> ~~~javascript
> const a = Symbol(); // new를 붙이지 않는다!
> const b = Symbol(); 
> 
> console.log(a);
> Symbol()            // 옆과 같이 해도
>                     // a == b 를 하면 false 이다
> console.log(b);
> Symbol()
> ~~~

- 유일성을 보장한다.
> ~~~javascript
> const id = Symbol('id');
> ~~~
> 와 같이 설명을 덧붙일 수도 있다. 나중에 디버깅할 때 편하다.  
> 해당 문자열은 Symbol 생성에 어떠한 영향도 미치지 않는다.  
>
> ~~~javascript
> const id = Symbol('id');
> const id2 = Symbol('id');
> // 설명은 같지만 서로 전혀 다른 Symbol 이 된다.
> ~~~

**property key : 심볼형**  
> ~~~javascript
> const id = Symbol('id');
> const user = {
>     name : 'PMtHk',
>     age : 25,
>     [id] : 'myid',
> }
> > user // 를 찍으면
> > {name: "PMtHk", age: 30, Symbol(id): "myid"} //와 같이 나온다.
> > user[id] // "myid"
> 
> Object.keys(user); // ["name", "age"]
> Object.values(user); // ["PMtHk", 25]
> ~~~
> Object.keys() 나 Object.values 와 같은 메소드들은 키가 Symbol 형인 키는 건너뛴다.  
> 마찬가지로, `for(let a in user){}` 와 같이 써도 건너뛴다.  
>
> 어디에 쓸 수 있을까?...  
> 특정 객체의 원본 데이터는 건드리지 않고 속성을 추가할 수 있다.

**Symbol.for(): 전역 심볼**  

- 하나의 Symbol만 보장받을 수 있다.
- 없으면 생성하고, 있으면 가져온다.
- Symbol 함수는 매번 다른 Symbol 값을 생성하는데에 비해,
- Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 Symbol **공유**

> ~~~javascript
> const id1 = Symbol.for('id');
> const id2 = Symbol.for('id');
>
> > id === id2; -> true
> > Symbol.keyFor(id1) // "id"
> ~~~  

- description  
  전역 심볼이 아닌 심볼은 `.keyFor()` 사용할 수 없다. 대신 `description` 으로 이름을 알 수 있다.
> ~~~javascript
> const id = Symbol('id 입니다.');
> id.description; // "id 입니다." 
> ~~~ 

**심볼을 완전히 숨길 수 있는 방법은 없다!**
> ~~~javascript
> const id = Symbol('id');
>
> const user = {
>     name : 'zooby',
>     age : 30,
>     [id] : 'myid'
> }
> 
> Object.getOwnPropertySymbols(user); // -> [Symbol(id)]
> Reflect.ownKeys(user); // -> ["name", "age", Symbol(id)]
> ~~~  
> 하지만, 대부분의 라이브러리나 내장함수들은 이런 메소드들을 사용하지 않는다.  
> 걱정말고, 유일한 Property를 추가하고 싶을 때, `Symbol` 을 사용하자!

</br>

## **5. Number, Math**  
`toString()` : 10진수 수 -> 2진수/16진수 (String형태로)
~~~javascript
let num1 = 10;

num1.toString();     // "10"
num1.toString(2);    // "1010"

let num2 = 255;

num2.toString(16);   // "ff"  
~~~

`Math` 수학과 관련된 property와 method를 가진 내장객체이다.  
- `Math.ceil()` : 올림
>  ~~~javascript
> let num1 = 5.1;
> let num2 = 5.7;
> 
> Math.ceil(num1);  // 6
> Math.ceil(num2);  // 6
> ~~~

- `Math.floor()` : 내림
>  ~~~javascript
> let num1 = 5.1;
> let num2 = 5.7;
> 
> Math.floor(num1);  // 5
> Math.floor(num2);  // 5
> ~~~

- `Math.round()` : 반올림
>  ~~~javascript
> let num1 = 5.1;
> let num2 = 5.7;
> 
> Math.round(num1);  // 5
> Math.round(num2);  // 6
> ~~~

- `toFixed()` : 소수점 자릿수 
>  ~~~javascript
> let userRate = 30.1234;
> userRate.toFixed(2); // "30.12"
> userRate.toFixed(0); // "30"
> userRate.toFixed(6); // "30.123400"
> ~~~
> 문자열을 반환하니 주의하자! `Number()`로 감싸서 다시 수로 바꾸자!

- `isNaN()`
> `NaN`인지 아닌지 판단해준다. 이 방법 말고는 `NaN`인지 판별할 수 있는 방법은 없다.
> ~~~javascript
> let x = Number('x');  // NaN
>
> x == NaN    // false
> x === NaN   // false
> NaN == NaN  // false 자기자신과도 똑같지 않다고 판단한다...
> 
> isNaN(x)    // true
> isNaN(3)    // false
> ~~~

- `parseInt()`
> 문자열을 숫자로 변환해준다. `Number()`와 다른 점은 문자가 섞여있을 때, `Number()`는 `NaN`을 반환하지만, `parseInt()`는 읽을 수 있는 부분까지 읽고 문자를 만나면 거기까지를 숫자로 반환한다.
> ~~~javascript
> let margin = '10px';
> 
> parseInt(margin);   // 10
> Number(margin);     // NaN
> 
> let redColor = 'f3';
> parseInt(redColor);   //NaN
> ~~~
> 숫자로 시작하지 않으면 `NaN`을 반환한다.  
> `parseInt()`는 두 번째 인수를 받아서 진수를 정할 수 있다.
> ~~~javascript
> let redColor = 'f3';
> parseInt(redColor);   // NaN
> parseInt(redColor, 16); // 243
> parseInt('11', 2)     // 3
> ~~~

- `parseFloat()`
> `parseInt()`와 동일하게 동작하지만, 소수점 이하를 무시하고 정수부만 반환하는 `parseInt()`와 달리, 부동소수점을 반환한다.
> ~~~javascript
> let padding = '18.5%';
> parseInt(padding);    // 18
> parseFloat(padding);  // 18.5
> ~~~

- `Math.random()` : 0 ~ 1 사이 무작위 숫자 생성
> 1 ~ 100 사이 임의의 숫자를 뽑고 싶다면
> ~~~javascript
> Math.floor(Math.random()*100)+1
> ~~~

- `Math.max()` : 최대값 Maximum
- `Math.min()` : 최소값 Minimum
- `Math.abs()` : 절대값 Absolute
- `Math.pow()` : 거듭제곱값 Power
- `Math.sqrt()` : 제곱근  SquareRoot

<br/>  

## **6. 문자열 메소드(String Method)**  
- 큰 따옴표, 작은 따옴표, 백틱
> ~~~javascript
> let html = '<div class="box_title">제목 영역</div>';
> // html은 큰 따옴표가 들어가는 내용이 있으므로 작은 따옴표로 감싸는게 Good.
> let desc = "It's 3 o'clock.";
> // 영어 문장은 작은 따옴표가 종종 들어가니 큰 따옴표로 감싸는게 Good.
>
> let name = 'Mike';
> let result = `My name is ${name}.`;
> let add = `2 더하기 3dms ${2+3}입니다.`
> //백틱은 ${ } 형태로 변수, 표현식 이용 가능
>
> let desc2 = `오늘은 맑고 
> 화창한 날씨가 계속되지만
> 내일은 비가 올 예정이다.`
> // 와 같이 여러줄로도 쓸 수 있지만
> // 따옴표 이용시 \n 개행문자를 써야한다. 그냥 줄바꿈시 에러발생!
> ~~~
> 문자열도 배열처럼 특정위치에 접근이 가능하지만, 특정위치만 수정할 수 없다.
- `toUpperCase()/toLowerCase()`로 대소문자 변경 가능.
- `str.indexOf(text)`
> ~~~javascript
> let desc = "Hi guys. Nice to meet you.";
> desc.indexOf('to');   // 14
> desc.indecOf('man');  // -1 찾는문자 없으면 -1 반환.
> ~~~
> 찾는 문자가 여러개라도 첫 번째 위치만 반환한다.

- `str.slice(n, m)`
> n : 시작점  
> m : 없으면 문자열 끝까지, 양수면 그 숫자까지(포함X), 음수면 끝에서부터 센다!
> 
> ~~~javascript
> let desc = "abcdefg";
>
> desc.slice(2)       // "cdefg"
> desc.slice(0, 5)    // "abcde"
> desc.slice(2, -2)   // "cde"
> ~~~

- `str.substring(n, m)`
> n 과 m 사이 문자열 반환한다. n, m 의 위치 바꿔도 동작한디. 음수는 0으로 인식한다.
> ~~~javascript
> let desc = "abcdefg";
>
> desc.substring(2, 5);   // "cde"
> desc.substring(5, 2);   // "cde"
> ~~~

- `str.substr(n, m)`
> `.substr(n, m)`과 동작방식은 비슷하나, n ~ m 이 아닌, n 부터 m 개를 가져온다.  

- `str.trim()`: 앞 뒤 공백 제거
> ~~~javascript
> let desc = "   coding         ";
> desc.trim();   // "coding"
> ~~~
> 보통 사용자로부터 무언가를 입력받을 때 사용한다.

- `str.repeat(n)`: n번 반복
> ~~~javascript
> let hello = "hello!";
> hello.repeat(3);  // "hello!hello!hello!"
> ~~~

- 문자열 비교
> 정수처럼 크기비교가 가능하다.
    
</br>

## **7. 배열 메소드(Array Methods)** 
- `arr.splice(n, m)` : 특정 요소 지움(n번째 요소부터, m까지 지운다.)
> ~~~javascript
> let arr = [0,1,2,3,4,5];
> arr.splice(1,2);
> // arr = [1,4,5]
> ~~~
- `arr.splice(n,m,x)` : 특정 요소 지우고 추가!
> ~~~javascript
> let arr = [0,1,2,3,4,5];
> arr.splice(1,3,100,200);
> // arr = [1,100,200,5]
> ~~~
> m이 0이면 삭제하지 않고 n번째 부터 추가한다.  
> `arr.splice()`는 삭제된 요소를 반환한다.

- `arr.slice(n, m)` : n부터 m까지 반환한다.
> ~~~javascript
> let arr = [1,2,3,4,5];
> arr.slice(1,4); // [2,3,4]
> ~~~
> 괄호 안에 아무 인자도 없으면 해당 배열을 복사한다.

- `arr.concat(arr2, arr3 ...)` 합쳐서 새배열을 반환한다.
> ~~~javascript
> let arr = [1,2];
> arr.concat([3,4]); // [1,2,3,4]
> arr.concat([3,4], [5,6]); // [1,2,3,4,5,6]
> arr.concat([3,4],5,6); // [1,2,3,4,5,6]

- `arr.forEach(fn)` : 배열 반복
> ~~~javascript
> let users = ['Mike', 'Tom', 'Jane'];
> users.forEach((item, index, arr) => {
>  // ..
> });
> ~~~

- `arr.indexOf / arr.lastIndexOf`
> 문자열의 `indexOf`와 사용법은 같다. 발견하면 해당 요소의 인덱스를 반환하고 없으면 '-1' 을 반환한다.
> ~~~javascript
> let arr = [1,2,3,4,5,1,2,3];
> arr.indexOf(3); // 2
> arr.indexOf(3,4); // 7
> arr.lastindexOf(3); // 7
> ~~~
> 위 처럼 인자가 두개인 경우, 두 번째 인수는 시작위치를 의미한다. (인덱스 4부터 3을 찾기)
> `lastIndexOf()`는 뒤에서 부터 찾아서 인덱스 값을 반환한다.

- `arr.includes()` : 인덱스 필요없이 포함하는지 확인 (true/false)

- `arr.find(fn)/ arr.findindex(fn)`
> 보다 복잡한 연산이 가능하도록 함수를 연결할 수 있다.  
> 첫 번째 true 값만 반환하고 끝난다. 없으면 undefined를 반환하니 주의하자.

- `arr.filter(fn)` : 만족하는 모든 요소를 배열로 반환한다.

- `arr.reverse()` : 역순으로 재정렬한다.
- `arr.map(fn)` : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환한다.

- `join() / split()`
> `join()`의 경우, 인자로 아무것도 전달되지 않으면 Comma(,)로 연결한다.
> `split()`의 경우, 빈 문자열("")을 입력하면 각 글자별로(스페이스 포함) 출력한다.

- `Array.isArray()`
> 배열인지 아닌지 확인하려면 `isArray` 를 이용해야 한다.
> 자바스크립트에서 배열은 객체형에 속하므로, `typeof` 이용시 객체라고 알려준다.

- `arr.sort() / arr.reduce()`
> `arr.sort()`는 배열 재정렬한다. 배열 자체가 변경되니 주의하자.
> `.sort()`는 정렬시 요소를 문자열로 취급함에 주의하자.
> -> 보통은 Lodash와 같은 라이브러리를 이용한다.
>
> `reduce()`는 인수로 함수를 받는다.  
> for 문과 비슷하게 동작한다. 배열의 요소를 돌며 원하는 작업을 하고 최종값을 반환한다. 
> ~~~javascript
> let arr = [1,2,3,4,5];
> const result = arr.reduce((prev, cur) => {
>    return prev + cur;
> }, 0); // -> 0 은 초기값
> console.log(result); // 15
> // (누적 계산값, 현재값) => {return 계산값};
> ~~~
> `reduceRight()` 는 배열 우측부터 동일하게 수행한다.

</br>

## **8. 구조 분해 할당(Destructuring Assignment)** 
구조 분행 할당 구문은 배열이나 객체의 속성을 분해해서, 그 값을 변수에 담을 수 있게 하는 표현식

> **배열 구조 분해**
> ~~~javascript
> let [x, y] = [1, 2];
> console.log(x); // 1
> console.log(y); // 2
> 
> let str = "Mike-Tom-Jane";
> let [user1, user2, user3] = str.split('-');
> console.log(user1); //  'Mike'
> console.log(user2); //  'Tom'
> console.log(user3); //  'Jane'
> ~~~
> 지난 시간 배운 `.split()`을 이용하면, 위와 같이 사용할 수 있다.
>
> 만약 해당하는 값이 없다면?
> ~~~javascript
> let [a, b, c] = [1, 2];
> // c 에 undefined가 할당된다.
> let [ a=3, b=4, x=5 ] = [1, 2];
> ~~~
> 따라서 위와 같이 기본 값을 설정할 수 있다.
> 
> 일부 반환값을 무시할 수도 있는데
> ~~~javascript
> let [user1, , user2] = ["Mike", "Tom", "Jane", "Tony"];
> // user1 = "Mike", user2 = "Jane"
> ~~~
> 위와 같이 공백을 이용해서 무시할 수 있다.
> 
> 다른 언어들에서 두 변수의 값을 서로 바꾸려면, 임시변수를 생성해야 했는데
> 배열 구조 분해를 이용하면,  
> ~~~javascript
> let a = 1;
> let b = 2;
> 
> [a,b] = [b,a];
> ~~~
> 와 같이 쉽게 두 값을 바꿀 수 있다.

<br/>

> **객체 구조 분해**
> ~~~javascript
> let user = {name: 'Mike', age: 30};
> let {name, age} = user;
> // 위의 코드는 아래와 같은 의미이다.
> let name = user.name;
> let age = user.age;
> // 따라서 출력하면 아래와 같다.
> console.log(name);  // 'Mike'
> console.log(age);   // 30
> ~~~
> 배열 구조 분해와 다른 점은, 객체의 경우 순서를 신경쓰지 않아도 된다는 점이다.  
> (property key 값을 꼭 사용해야하는 것도 아니다.)
>
> 새로운 변수의 이름으로 할당하고자 할때는
> ~~~javascript
> let user = {name: 'Mike', age: 30};
> let {name: userName, age: userAge} = user;
> console.log(userName);  // 'Mike'
> console.log(userAge);   // 30
> ~~~
>
> 배열과 마찬가지로 객체 구조 분해에도 기본값을 할당할 수 있다.
> ~~~javascript
> let user = {name: 'Mike', age: 30};
> let {name, age, gender} = user; // 이때 gender는 undefined
>
> let {name, age, gender = 'male'} = user;
> ~~~

</br>

## **9. 나머지 매개변수(Rest Parameters)** 
**나머지 매개변수 `...`**

~~~javascript
function showName(name){
  console.log(name);
}
showName('Mike');   // 'Mike'
~~~
과 같이 일반적으로 name에 'Mike'가 들어왔으니, 콘솔에 'Mike'를 찍어준다.  

하지만 인수로 두개가 들어가면 어떻게 될까?  
에러는 발생하지 않고 그대로 'Mike' 가 찍히게 된다. Why?  
Javascript에서 함수에 넘겨주는 인수의 개수의 제한이 없다.  
아무것도 전달하지 않아도 에러는 발생하지 않는다. 다만 undefined가 나오게 된다.  

함수의 인수를 얻는 방법에 두가지가 있다.
- `arguments` 로 접근하는 방법
- `...` 나머지 매개 변수를 사용하는 방법

과거에는 `arguments`만 사용할 수 있었지만, 최근에는 여러 장점이 있는 나머지 매개변수 `...` 를 사용하는 추세이다. 화살표 함수에는 `arguments`가 없다.

**`arguments`란**
> 함수로 넘어온 모든 인수에 접근할 수 있다.  
> 함수내에서 이용 가능한 지역 변수이다.  
> length와 index가 있기 때문에 배열이라 생각할 수 있지만,  
> 사실 Array 형태의 객체이다.  
> 따라서, length와 index는 가지고 있지만, 배열의 내장 메소드는 없다.  
> ~~~javascript
> function showName(name) {
>   console.log(arguments.length);
>   console.log(arguments[0]);
>   console.log(argumnets[1]); 
> }
> showName('Mike', 'Tom');
> //  2
> //  'Mike'
> //  'Tom'
> ~~~

ES6를 사용할 수 있는 환경이면, 가급적 나머지 매개변수 `...` 구문의 사용을 권장한다.

**나머지 매개변수(`...`)란**
> 정해지지 않은 개수의 인수를 배열로 나타낼 수 있게 한다.
> ~~~javascript
> function showName(...name){ // names란 배열을 만들어
>   console.log(names);       // 전달된 인수를 names안에 넣는다.
> }
> showName();               // []
> showName('Mike');         // ['Mike']
> showName('Mike', 'Tom');  // ['Mike', 'Tom']
> ~~~
> 배열과 다르게 배열 메소드들도 사용이 가능해진다.  
> 항상 나머지 매개변수는 제일 마지막에 위치해야 한다.


</br>

## **10. 전개 구문(Spread Syntax)** 
~~~javascript
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1, ...arr2];
console.log(result); // [1,2,3,4,5,6]
~~~
`...arr1`은 [1,2,3]을 풀어서 쓴것이다.  
배열을 풀어 다시 배열로 묶는 것은 번거롭지만, 전개구문을 이용하면 빠르게 할 수 있다.  

객체에서도 가능하다.
~~~javascript
let arr = [1,2,3];
let arr2 = [...arr];  // [1,2,3]

let user = {name: 'Mike', age:30};
let user2 = {...user};

user2.name = "Tom";

console.log(user.name);     // "Mike"
console.log(user2.name);    // "Tom"
~~~








