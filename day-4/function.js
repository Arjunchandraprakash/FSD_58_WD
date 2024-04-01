let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

function areObjectEqual(obj1,obj2) {
    var key1 = Object.keys(obj1);
    var key2 = Object.keys(obj2);

    if(key1.length !== key2.length){
    return false;
}

for (var i=0; i<key1.length; i++) {
    if (obj1[key1[i]]) !== (obj2[key1[i]]){
        return false;
    }
}

return true;
}

console.log(areObjectEqual(obj1.obj2));