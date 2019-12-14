var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        //console.log("Person constructor");
    }
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName, this.lastName);
    };
    return Person;
}());
var PersonAccount = /** @class */ (function (_super) {
    __extends(PersonAccount, _super);
    function PersonAccount(firstName, lastName, balance) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.balance = balance;
        return _this;
    }
    PersonAccount.prototype.transfer = function (otherPersonAccount, amount) {
        this.balance -= amount;
        this.sayHello();
        otherPersonAccount.balance += amount;
        otherPersonAccount.sayHello();
    };
    PersonAccount.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
        console.log("My balance account:", this.balance);
    };
    return PersonAccount;
}(Person));
// let adam = new Person("Adam", "Rzońca");
// adam.sayHello();
var myAccount = new PersonAccount("Adam", "Rzońca", 13);
var otherAccount = new PersonAccount("Inna", "Osoba", 1000);
myAccount.transfer(otherAccount, 5);
