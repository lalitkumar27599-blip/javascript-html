//septer1
// //Create a variable studentName using var and print its value.
var studentName = "Lalit";
console.log(studentName);

//Create a variable age using let, assign value 20, update it to 25, and print the updated value.
let age = 24;
age = 27;
console.log(age);

//Create a constant variable country = "India" and print it.
const country = "India";
console.log(country);

//Create variables name, age, and city, then print all values in one line.
let name = "Lalit";
let age2 = 24;
let city = "Jalore";
console.log(name, age2, city);

//Create two number variables and print their sum
let a=5;
let b=7;
let c=a+b;
console.log(c);

//Create a string "javaScript" and print its first character.
let str1 = "JavaScript";
console.log(str1[0]);

//Create a string "Programming" and print its last index
let str2 = "Programming";
console.log(str2[10]);

//Convert the string "HELLO WORLD" into lowercase and print
let str3 = "HELLO WORLD";
console.log(str3.toLowerCase());

//Convert the string "javascript" into uppercase and print
let str4 = "javascript";
console.log(str4.toUpperCase());

//Create a student object with name, age, and course, then print the object
let student = {
        name: "lalit",
        course: "web",
    }
console.log(student);


//septer 2
//Check if ageis greater than 18
let age = 17;
if(age>=18) {
    console.log("Eligible");
}
else {
    console.log("Not eligible");
}
           
//Check if wifi is connected or mobile data is connected
let wifi = true;
let mobileData = false;
console.log(wifi || mobileData);

// Check whether a number is even or odd
let num = 4;
if(num%2==0) {
    console.log("even");
}
else {
    console.log("Odd");
}

// Check whether a person can vote 
let age1 = 24;
if(age1>=18) {
    console.log("can vote");
}
else {
    console.log("can not vote");
}

// Check pass or fail using ternary operator
let marks = 65;
let result = marks>=33 ? "Pass" : "Fail";
console.log(result);

// Check adult or minor using ternary operator
let age2 = 65;
let result2 = age2>=18 ? "adult" : "minor";
console.log(result2);

// Print the current date using data object
let date = new Date();
console.log(date);

// print the current year using date object
let date1 = new Date();
console.log(date1.getFullYear);

// Print numbers from 1 to 10 using for loop
for(let i=1; i<=10;i++) {
    console.log(i);
}

// Print even numbers from 1 to 20
for(let i=1; i<=10;i++) {
    if(i%2==0){
        console.log(i);

    }

}

//septer3
// Create two arrays [1,2,3] and [4,5,6] and join them using concat()
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result = arr1.concat(arr2);
console.log(result);

// Print numbers from 1 to 20
let num = 1;
while(num<=20) {
    console.log(num);
    num++;
}

// Print all even numbers from 1 to 50
let num1 = 1;
while(num1<=50) {
    console.log(num1);
    num1++;
}

// Print numbers from 10 to 1 
let num2 = 10;
do{
    console.log(num2);
    num2--;
}while(num2>=1);

// *
// **
// ***
for(let i=1; i<=3; i++) {
    let space = "";
    for(let j=1; j<=i; j++) {
        space = space+"*";
    }
    console.log(space);
    
}

//Create an array [10,20,30] and add 40 using push()
let arr_1 = [10,20,30];
arr_1.push(40);
console.log(arr_1);

// Create an array ["HTML", "CSS", "JAVASCRIPT"] and remove the last element
let arr_2 = ["HTML", "CSS", "JavaScript"];
arr_2.pop();
console.log(arr_2);

// Create an array ["Delhi", "Jaipur", "Mumbai"] and remove the first element
let arr_3 = ["Delhi", "Jaipur", "Mumbai"];
arr_3.shift();
console.log(arr_3);

// Create an array [20,30,40] and add 10 at the beggining
let arr_4 = [20,30,40];
arr_4.unshift(10);
console.log(arr_4);

// Create an array [1,2,3,4,5] and print elements from index 1 to 3 
let arr_5 = [1,2,3,4,5];
let result_5 = arr_5.slice(1,4);
console.log(result_5);