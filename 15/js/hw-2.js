function calcChange(payment, cost) {
  // 여기에 코드를 작성하세요.
  let changeAmount = payment - cost;

  let count50000 = parseInt(changeAmount / 50000);
  changeAmount -= count50000 * 50000;

  let count10000 = parseInt(changeAmount / 10000);
  changeAmount -= count10000 * 10000;

  let count5000 = parseInt(changeAmount / 5000);
  changeAmount -= count5000 * 5000;

  let count1000 = parseInt(changeAmount / 1000);
  changeAmount -= count50000 * 1000;

  console.log("50000원 지폐 : " + count50000 + "장");
  console.log("10000원 지폐 : " + count10000 + "장");
  console.log("5000원 지폐 : " + count5000 + "장");
  console.log("1000원 지폐 : " + count1000 + "장");   
}

calcChange(100000, 33000);
console.log('');
calcChange(500000, 378000);




// function calcChange(payment, cost) {
//   // 여기에 코드를 작성하세요.
//   let changeAmount = payment - cost;

//   let count50000 = parseInt(changeAmount / 50000);

//   let count10000 = parseInt((changeAmount % 50000)/10000);

//   let count5000 = parseInt((changeAmount % 10000)/5000);

//   let count1000 = parseInt((changeAmount % 5000)/1000);

//   console.log("50000원 지폐 : " + count50000 + "장");
//   console.log("10000원 지폐 : " + count10000 + "장");
//   console.log("5000원 지폐 : " + count5000 + "장");
//   console.log("1000원 지폐 : " + count1000 + "장");
//     ==> console.log(`5000원 지폐 : ${count5000}`);

// }

// calcChange(100000, 33000);
// console.log('');
// calcChange(500000, 378000);