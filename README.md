# JavaScript
## JavaScript 기초 공부를 위한 개인 페이지<br/>
참고한 유튜브: 코딩앙마님의 자바스크립트 중급 강좌 : 140분 완성<br/>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4_WLS9Lj6n4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
<br/>

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

## **3. Object Method, Computed Property**  













