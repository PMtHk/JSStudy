// ES6 이전
// var(이용하지 않는다.), let const

// var name = 'Mike';
// console.log(name);

// var name = 'Jane';
// console.log(name);
// var는 한번 선언된 변수를 다시 선언할 수 있다. 위에 var가 let이 되면 error!

// var는 선언하기 전에 사용할 수 있다.
// console.log(name);
// var name = 'Mike';  // 호이스팅된다 ( 선언은 호이스팅, 할당은 X )

// let과 const도 호이스팅 되지만, TDZ(Temporal Dead Zone)에 영향을 받는다. 할당하기전 사용불가
// 코드를 예측가능하게 하고, 잠재적인 버그를 줄일 수 있다.

// 변수는 선언-초기화-할당으로 생성됨
// var는 선언 초기화 동시에
// let은 선언과 초기화가 분리.
// const는 선언과 초기화 할당 한번에 수정불가. 선언하면서 할당 해야함!

// let과 scope는 block 스코프
