class animal{
    constructor(){
        console.log("this constructor is from animal");
    }
    move = true;
}

class rabbit extends animal {
    constructor(){
        super();
        console.log("this constructor is from rabbit")
    }
    eat = true;
}

let r = new rabbit();

//this

class Person {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Employee extends Person {
    constructor(name,id){
        super(name);
        this.id = id;
    }

    getID(){
        return this.id;

    }
}

let emp = new Employee("Arjun", "EMP01");
console.log("Employee get name:", emp.getName());
console.log("Employee get ID:", emp.getID());






