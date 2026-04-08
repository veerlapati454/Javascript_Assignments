//1
let name= prompt("Enter Name:");
let ageInput= prompt("Enter Age:");
let salaryInput= prompt("Enter Monthly Salary:");
let loanInput= prompt("Enter Loan Amount:");

//7
console.log("Before conversion:");
console.log(typeof ageInput,typeof salaryInput, typeof loanInput);

let age=Number(ageInput);
let salary=Number(salaryInput);
let loanAmount=Number(loanInput);

console.log("After conversion:");
console.log(typeof age, typeof salary, typeof loanAmount);

//2
if (age >= 21 && age <= 60 && salary >= 25000) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

//3
let emi=loanAmount;
emi/=12;
console.log("EMI:", emi);

// 4
if (loanAmount>500000) {
    console.log("Loan Category: High Loan");
}
else if (loanAmount>200000) {
    console.log("Loan Category: Medium Loan");
}
else {
    console.log("Loan Category: Low Loan");
}

//5
let risk=(salary>50000) ? "Low Risk" : "High Risk";
console.log("Risk Level:", risk);

//6
let customerType;
switch (true) {
    case (emi>40000):
        customerType="Premium Customer";
        break;
    case (emi>20000):
        customerType="Standard Customer";
        break;
    default:
        customerType="Basic Customer";
}

console.log("Customer Type:",customerType);