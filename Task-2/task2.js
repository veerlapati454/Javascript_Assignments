//SECTION 1
//1
console.log("SAISANTHOSH , FRONTEND DEVELOPER")
//2
alert("Welcome to JavaScript Session")
//3
 confirm("Do you like coding?")
//4
let result= prompt("Enter favorite food")
console.log(result)
//5
document.writeln("GOOD EVENING TEAM" )

//SCTION2
//6
console.log(10)
//7
console.warn("This is warning")
//8
console.error("something went wrong")
//9 
console.clear()

//section3
//10
var a= "saisanthosh"
console.log(typeof(a))
//11
var age= 27
console.log(typeof(age))
//12
var food=false
console.log(food)
//13
var b
console.log(b)
//14
var c= null
console.log(c)
//section 4

//15
var fruits=["mango","apple","banana","grapes","kiwi"]
console.log(fruits)
//16
console.log(fruits[0],fruits[fruits.length-1])
//17
fruits[fruits.length]="pineapple"
console.log(fruits)
//18
fruits.pop()
console.log(fruits)
//19
console.log(fruits.length)
//section 5

//20
var student={
    name:"sai",
    age:27,
    course:"ece"
}
//21
console.log(student.name)
//22
student.college="vignan"
//23
student.skills=["html","css","js"]
console.log(student.skills[1])
//24
student.age=28
console.log(student.age)

//section6

//25
var c=10
var d=20
console.log(c+d)
//26
console.log(c-d)
//27
console.log(c*d)
//28
console.log(c/d)
//29
console.log(c%d)
//30
console.log(c**d)

//section7

//31
var k=56
console.log(k++)
//32
var t=90
console.log(++t)
//33
var num=100
console.log(num++) //100
console.log(num) //101
var num1=100
console.log(++num1) //101
console.log(num1) //101
//34
console.log(num--) //101
console.log(--num1) //100
//35
let a1 = 5;
let b1 = a1++;
let c1 = ++a1;

console.log(a1); //7
console.log(b1); //5
console.log(c1); //7

// section8
//36
 let age1=prompt("enter age")
 if(age1>=18){
    console.log("eligible")
 }
 else{
    console.log("not eligible")
 }
//37
let username=prompt("enter name")
console.log("hello"+username)
//38
let marks=[31,35,32,30,51,2]
let max=marks[0]
for(i in marks){
    if(i>max){
        max=i
    }
}
console.log(max)
//39
let fruits1={
  types: ["Apple", "Banana", "Mango"]
}
console.log(fruits1.types[2]); 
//40
let favFruits=[];
for (let i=0;i<3;i++) {
  let fruit=prompt("Enter your favorite fruit");
  favFruits[i]=fruit;
}
console.log("Your favorite fruits are:");
for (let i=0; i<favFruits.length;i++) {
  console.log(favFruits[i]);
}