interface Shape {
  shapeName: string;

  calculateArea(): number;

  draw(): void;
}

class Circle implements Shape {
  shapeName: string = "Circle";
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  draw(): void {
    console.table({ shapeName: this.shapeName, area: this.calculateArea() });
  }
}

class Rectangle implements Shape {
  shapeName: string = "Rectangle";
  constructor(private a: number, private b: number) {}

  calculateArea(): number {
    return this.a * this.b;
  }

  draw(): void {
    console.table({ shapeName: this.shapeName, area: this.calculateArea() });
  }
}

class SquareTriangle implements Shape {
  shapeName: string = "SquareTriangle";
  private c: number;
  constructor(private a: number, private b: number) {
    this.c = Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
  }

  calculateArea(): number {
    return 0.5 * this.a * this.b;
  }

  draw(): void {
    console.table({ shapeName: this.shapeName, area: this.calculateArea() });
  }
}

const circle = new Circle(10);
// console.log(circle.calculateArea());

const rectangle = new Rectangle(5, 10);
// console.log(rectangle.calculateArea());

const squareTriangle = new SquareTriangle(1, 2);
// console.log(squareTriangle.calculateArea());

const shapes: Shape[] = [circle, rectangle, squareTriangle];

shapes.forEach(shape => shape.draw());
