//call by value

// var myage = 30;
// var myfrndage=myage;

// console.log("my age is : ", myage);
// console.log("my frndage is : ",myfrndage);

// myfrndage = myfrndage+1;

// console.log("my age after change : ", myage);
// console.log("my frnd age after change : ",myfrndage);

// //call by reference

// var mytoyBox = {toy:"Car"};
// var frndtoyBox = mytoyBox;

// console.log("my toy is : ", mytoyBox.toy) ;
// console.log("my frnd toy is : ", frndtoyBox.toy) ;

// mytoyBox.toy = "DOLL"

// console.log("my toy after change : ", mytoyBox.toy) ;
// console.log("my frnd after change : ", frndtoyBox.toy) ;


//Address in array and Object

// var ayaddress = [19,"B house", "jio", "chennai-", 116];

// console.log("Array Address is : ", ayaddress[0], ayaddress[1],ayaddress[2], ayaddress[3],ayaddress[4]);

// var ObAddress = {door_no:91, apt:"C house", Land:"LEO", city:"chennai-", pin:19};

// console.log("Object Address is :", ObAddress["door_no"],ObAddress["apt"],ObAddress["Land"], ObAddress["city"], ObAddress["pin"]);

//function

var num1 = 10;
var num2 = 70;
var sum = num1+num2;
console.log(sum);

num1=300;
num2=900;
var resum = num1+num2;
console.log(resum);

function add(num1,num2,text) {
    return text + (num1+num2);
}

console.log(add(20,30, "Small Value is : "));
console.log(add(400,800, "Big Value is : "));