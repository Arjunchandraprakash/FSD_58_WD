class person{
    constructor(name){
        this._name = name;
    }

get name(){
    return this._name;
}

set name(newname){
    this._name = newName;
}
}

let person = new person("Action King");
console.log(person.name);

person.name = "AK";
console.log(person.name);