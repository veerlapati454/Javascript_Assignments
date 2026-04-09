//1
function calculateDiscount(product,price)
 {
  let finalPrice;
  if (price>1000) {
   finalPrice=price*0.8;
  } else{
    finalPrice=price*0.9;
  }
  console.log(`Product:${product}`);
  console.log(`Final Price:${finalPrice}`);
}
calculateDiscount("Shoes",2000);

//2

function payment(amount,callback) {
  console.log(`Payment of ${amount} successful`);
  callback();
}

function orderSuccess() {
  console.log("Order delivered");
}

function placeOrder(callback) {
  console.log("Order placed");
  callback(500,orderSuccess);
}
placeOrder(payment);


// 3
let employees = [
  {name:"Sai",salary:50000},
  {name:"Alice",salary:70000}
];

for (let emp of employees) {
  if (emp.salary>60000) {
    console.log(`${emp.name}:High Salary`);
  } else {
    console.log(`${emp.name}:Normal Salary`);
  }
}
// 4
let correctPassword ="1234";
let attempts=0;
let inputPasswords =["1111","2222","1234"];

while (attempts<=2) {
  if (inputPasswords[attempts]===correctPassword) {
    console.log("Login success");
    break;
  }
  console.log(`Attempt ${attempts + 1}`);
  attempts++;
}


//5

function* offersGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Cashback";
}

let offerGen=offersGenerator();
console.log(offerGen.next().value);
console.log(offerGen.next().value);
console.log(offerGen.next().value);
console.log(offerGen.next().value);

//6
let cart=[100,200,300,400];
let total=0;
for (let price of cart) {
  total+=price;
}
console.log("Total Bill:",total);

//7
let user ={
  name:"Sai",
  role:"Developer",
  location:"India"
};

for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}


//8
function createPhone() {
  return "Phone";
}
function createBattery() {
  return "Battery";
}
function createCharger() {
  return "Charger";
}

console.log(`Your Order: ${createPhone()}+${createBattery()}+${createCharger()}`);


// 9
function collegeForm(name,department ="Not Assigned") {
  console.log(`Name:${name}`);
  console.log(`Department:${department}`);
}
collegeForm("Sai");


//10
function emi(p) {
  return function (r) {
    return function (t) {
      return (p*r*t)/100;
    };
  };
}
console.log("EMI:",emi(10000)(2)(12));

//11
for (let i=1;i<=10;i++) {
  if (i%2===0) {
    console.log(`${i} Even`);
  } else {
    console.log(`${i} Odd`);
  }
}

//12
function scopeTest(){
  if(true){
    var a =10;
    let b =20;
    const c = 30;
  }

  console.log("var a:", a); // works because it is function scoped
  //console.log("let b:", b); // error because let is block scoped
  //console.log("const c:", c); // error because let is block scoped
}
scopeTest();


//13
(function () {
  console.log("Flash Sale:50% OFF on Shirts");
})();


//14
function marks(a,b,c) {
  let total =a+b+c;
  let avg = total/3;
  return {total,avg};
}
let result = marks(80,90,70);
console.log("Total:",result.total);
console.log("Average:",result.avg);


//15
function* retryOffers(){
  yield "10% OFF";
  yield "20% OFF";
}

let retryGen=retryOffers();
let offer1=retryGen.next();
let offer2=retryGen.next();
let offer3=retryGen.next();
console.log(offer1.value);
console.log(offer2.value);
if (offer3.done) {
  console.log("All offers expired");
}