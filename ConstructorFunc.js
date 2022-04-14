// 생성자 함수 연습

function Item(title, price) {
  // this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function() {
    console.log(`가격은 ${price}원 입니다.`);
  }
  // return this;
}

const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 12000);
const item3 = new Item('지갑', 5000);
const item4 = Item('필통', 2000); 
// new를 붙히지 않으면, 그냥 함수 실행 undefined -> return이 없으므로

console.log(item1, item2, item3, item4);

item3.showPrice();