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
>     name : 'PMtHk';
>     age : 25,   // age 대신 [a] 가능 -> computed property
> }  
> ~~~  
식 자체를 넣는 것도 가능하다.
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

심볼을 완전히 숨길 수 있는 방법은 없다!
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
하지만, 대부분의 라이브러리나 내장함수들은 이런 메소드들을 사용하지 않는다.  
걱정말고, 유일한 Property를 추가하고 싶을 때, `Symbol`을 사용하자!












