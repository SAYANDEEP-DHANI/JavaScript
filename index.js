//length od the sentence
// name = "sayandeep dhani";
// console.log(name.length);

//escape character
// name = 'my name is"sayandeep dhani"& i am a good boy';
// console.log(name);

// nam = "sayandeep dhani";
// sdate = nam.search("dhani");//it is a case sensative.
// console.log(sdate);

//*********************** Time & Date *there are 4 way to create a new date object **************************
//#javascript count month from 0 to 11
// const date = new Date();
// console.log(date);
// console.log(new Date());
// console.log(new Date().toString());
// console.log(new Date().toLocaleString());

// january is 0 .december is 11
// d = new Date(2024, 0, 5, 17, 33, 7);
// console.log(d.toLocaleString());

// d = new Date("october 13, 2024 12:44");
// console.log(d.toLocaleString());

//#how to get the indivisual date
// console.log(new Date().toLocaleString());
// console.log(new Date().getFullYear());
// console.log(new Date().getMonth());
// console.log(new Date().getDate());
// console.log(new Date().getDay());

//#set the time for website
// console.log(new Date().setTime(5));
// console.log(new Date().setHours(5));
// console.log(new Date().setMinutes(5));
// console.log(new Date().setSeconds(5));
// console.log(new Date().setMilliseconds(5));

//#for indivisual
// console.log(new Date().toLocaleTimeString()); //only for time
// // console.log(new Date().toLocaleDateString()); //only for date
// console.log(new Date().toLocaleString()); //on;y for date and time

// ***********************************math object*********************************************
// console.log(Math.PI);
//return the value of x round
// nu = 10.5;
// console.log(Math.round(nu));

//#pow funtion
// console.log(Math.pow(2, 3));
// console.log(5 ** 3);

//#square root of x
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));
// console.log(Math.abs(4 - 6));

//#ceil and round
// console.log(Math.ceil(99.45));
// console.log(Math.round(99.4));

// #floor
// console.log(Math.floor(4.99));
// console.log(Math.floor(99.67));

// // # minimum & miximun
// console.log(Math.min(0, 4, 5, 2, -4));
// console.log(Math.max(14, 25, 78, 41));

// #random funtion
// console.log(Math.floor(Math.random() * 10));//0 to 9

//# return the integer part of the number
// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.67));

// ***************************************DOM IN JAVASCRIPT*******************************************
//  1.window vs document
// *window is the main container or we can say the global object and any operations related to entire browser
// window can be a part of window object.
// *whereas the DOM is the child of window object.

// ****************************************Time events******************************************
// 1.setTimeout()
// 2.clearTimeout()
// 3.setInterval()
// 4.clearInterval()
// ******************************************object*****************************************************
// let biodata = {
//   nam: "sayandeepdhani",
//   age: 21,
//   getdata: function () {
//     console.log("my name is ${.nam}");
//   },
// };
// biodata.getdata();

// const biodata = {
//   nam: "sayandeepdhani",
//   age: 21,
//   getdata: function () {
//     console.log(`My name is ${biodata.nam}`); // Use template literals (backticks) and "this"
//   },
// };

// biodata.getdata(); // Call the function directly
// const obj = {
//   myage: 25,
//   Myname: () => {
//     console.log(this);
//   },
// };
// obj.Myname();
// let biodata = {
//   Myname: {
//     realname: "sayandeep dhani",
//     businessname: "dhani tech",
//   },
//   Myage: 26,
//   getdata() {
//     console.log(
//       `My name is ${this.Myname.businessname} and my age is ${this.Myage}`
//     );
//   },
// };
// biodata.getdata();

// **********#array destructuring**********
// 12:16:03
// ************************************asynchronous javascript*************************************
// 1.hosting  in javascript
//  Lexical scoping
// let a = "hello are you";
// const first = () => {
//   let b = "hiiiiiii";
//   const second = () => {
//     let c = "bye";
//     console.log(a + b + c);
//   };
//   second();
// };
// first();
//2.closures in javascript
// "use strict";
// v = "sayan";
// console.log(v);
// ***************************************synchronous javascript******************************
// const fun2 = () => {
//   console.log("funtion is called");
// };
// const fun1 = () => {
//   console.log("funtion 1 is called");
//   fun2();
//   console.log("funtion 1 is called again");
// };
// fun1();
// ***************************************Asynchronous javascript******************************
// const fun2 = () => {
//   setTimeout(() => {
//     console.log("funtion is called");
//   }, 2000);
// };
// const fun1 = () => {
//   console.log("funtion 1 is called");
//   fun2();
//   console.log("funtion 1 is called again");
// };
// fun1();
// **************************************curring**************************************
// function sum(num1) {
//   return function (num2) {
//     return function (num3) {
//       console.log(num1 + num2 + num3);
//     };
//   };
// }
// sum(2)(9)(8);
// different way
// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
// sum(2)(9)(8);
// Callback hell
// setTimeout(() => {
//   console.log("1 work done");
//   setTimeout(() => {
//     console.log("2nd work done");
//     setTimeout(() => {
//       console.log("3rd work done");
//     }, 1000);
//   }, 1000);
// }, 1000);
 