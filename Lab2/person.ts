class Person {
  constructor(private firstName: string, private lastName: string) {
    //console.log("Person constructor");
  }

  sayHello() {
    console.log("Hello", this.firstName, this.lastName);
  }
}

class PersonAccount extends Person {
  constructor(firstName: string, lastName: string, private balance: number) {
    super(firstName, lastName);
  }

  transfer(otherPersonAccount: PersonAccount, amount: number) {
    this.balance -= amount;
    this.sayHello();

    otherPersonAccount.balance += amount;
    otherPersonAccount.sayHello();
  }

  sayHello() {
    super.sayHello();
    console.log("My balance account:", this.balance);
  }
}

// let adam = new Person("Adam", "Rzońca");
// adam.sayHello();

let myAccount = new PersonAccount("Adam", "Rzońca", 13);
let otherAccount = new PersonAccount("Inna", "Osoba", 1000);

myAccount.transfer(otherAccount, 5);
