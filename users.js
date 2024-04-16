
class User {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    set fullName(value) {
        const [firstName, lastName] = value.split(" ");
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (typeof value !== "number") {
            console.log("You must input a number");
            return;
        }
        this._age = value;
    }
}

class Worker extends User {
    constructor(firstName, lastName, age, jobTitle) {
        super(firstName, lastName, age);
        this._jobTitle = jobTitle;
    }
    get jobTitle() {
        return this._jobTitle;
    }
    set jobTitle(value) {
        this._jobTitle = value;
    }
}


const worker = new Worker("John", "Doe", 30, "Frontend Developer");
console.log(worker.fullName); // Output: John Doe
console.log(worker.age); // Output: 30
console.log(worker.jobTitle); // Output: Frontend Developer
worker.fullName = "Jane Smith";
console.log(worker.fullName); // Output: Jane Smith
worker.age = 31;

