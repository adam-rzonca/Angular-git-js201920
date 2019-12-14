"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.shapeName = "Circle";
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    draw() {
        console.table({ shapeName: this.shapeName, area: this.calculateArea() });
    }
}
class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.shapeName = "Rectangle";
    }
    calculateArea() {
        return this.a * this.b;
    }
    draw() {
        console.table({ shapeName: this.shapeName, area: this.calculateArea() });
    }
}
class SquareTriangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.shapeName = "SquareTriangle";
        this.c = Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
    }
    calculateArea() {
        return 0.5 * this.a * this.b;
    }
    draw() {
        console.table({ shapeName: this.shapeName, area: this.calculateArea() });
    }
}
const circle = new Circle(10);
// console.log(circle.calculateArea());
const rectangle = new Rectangle(5, 10);
// console.log(rectangle.calculateArea());
const squareTriangle = new SquareTriangle(1, 2);
// console.log(squareTriangle.calculateArea());
const shapes = [circle, rectangle, squareTriangle];
shapes.forEach(shape => shape.draw());
//# sourceMappingURL=shapes.js.map