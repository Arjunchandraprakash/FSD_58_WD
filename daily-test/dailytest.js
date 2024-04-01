// function fruitsName (apple, orange){
//     console.log(apple,orange);
//     const juice = `juice with ${apple} apple and ${orange} orange.`;
//     return juice;
// } 

// console.log(fruitsName(45,56));
// const result = fruitsName(78,89);
// console.log(result);

// function test(){
//     console.log(beforeLet);
//     console.log(beforeConst);


// let beforeLet = 'defined';
// const beforeConst = 'defined';
// }

// test();


// let fName = 'Arjun';
// let LName = 'C';
// let city = 'Pondi';
// let age = 30;

// console.log (`my name is ${fName} ${LName} and my age is ${age} living in ${city}`)

// let obj1 = {name:'arjun', age:31};
// let obj2 = {role:'FSD', comp:'ZOHO'};

// let combinedObj = {...obj1,...obj2};
// console.log(combinedObj);

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let combinedArr = [...arr1,...arr2];
// console.log(combinedArr);

// function sum(a,b,c,d){
//     return a+b+c+d;
// }

// const number = [2,3,4,5];
// console.log(sum(...number));

// let obj1 = {name:"Person1", age:5};
// let obj2 = {age:5, name:"Person1"};

// function areObjEqual(obj1,obj2){
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

// if (keys1.length !== keys2.length){
//     return false;
// }

// for (var key of keys1) {
//     if(obj1[key] !== obj2[key]){
//         return false;
//     }
// }

// return true;
// }
// console.log(areObjEqual(obj1,obj2));


// var xhr = XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v3.1/all", true);
// xhr.onload = function () {
//     console.log(xhr.status);
//     var countries =JSON.parse (xhr.responseText);
//     countries.forEach(country => {
//         console.log(country.name.common + ": " +country.flag);
//     });
// };

// xhr.send();



// var xhr = new XMLHttpRequest();
// xhr.open("GET","https://restcountries.com/v3.1/all", true);
// xhr.onload = function () {
// var countries = JSON.parse(xhr.responseText); 
// countries.forEach((country) => {
// console.log(country.name.common+ ": " +country.flag);
// console.log(country.name.common+ ": " +country.population);
// console.log(country.name.common+ ": " +country.region);
// console.log(country.name.common+ ": " +country.subregion);
// console.log(country.name.common+ ": " +country.official);
// });
// };
// xhr.send();

// const [a,b,c] = [1,2,3];
// console.log(a);
// console.log(b);
// console.log(c);

// const numb = [1,2,3];
// let a = numb[0];
// let b = numb[1];
// let c = numb[2];

// console.log(a);
// console.log(b);
// console.log(c);

//destructing
// const numbersNew = [1,2,3,4,5];
// const [first, second, ...others] = numbersNew;
// console.log("first", first);
// console.log("second", second);
// console.log("others", Others);

// //
// const person = {
//     firstName: "Arjun",
//     Age: 31,
// }

// const {firstName, Age} = person;

// console.log("My name is ", firstName);
// console.log("My age is ", Age);


const employees = {
{
    eName:"emp1",
    age: 25,
    dept: "sales",
    email: "emp1@gmail.com",
},
{
    eName:"emp2",
    age: 26,
    dept: "fin",
    email: "emp2@gmail.com",
},
{
    eName:"emp3",
    age: 27,
    dept: "Service",
    email: "emp3@gmail.com",
},
{
    eName:"emp4",
    age: 27,
    dept: "Auditing",
    email: "emp4@gmail.com",
},
{
    eName:"emp5",
    age: 28,
    dept: "Frontdesk",
    email: "emp5@gmail.com",
}
}

const [first, second, third, fourth, fivth] = employees;


var shape = {
    is20: true,
};

var circle = {
    radius: 3,
}

var rectangel = {
    lenght: 1,
    breadth: 2,
}

console.log