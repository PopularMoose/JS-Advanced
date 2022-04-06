class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName= lastName;
        this.age = age;
        this.email = email;

    }

    toString(){
        let PersonInfo = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        return PersonInfo;
    }
}
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());