// const shape = {
//     color: "blue"
// }

class Shape {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setColor(newColor) {
        this.color = newColor
    }
}

 const aShape = new Shape("blue")
 console.log(aShape.getColor()) // logs "blue"
 aShape.setColor("red")
 console.log(aShape.getColor()) // logs "red"


class Circle extends Shape {
    constructor(color) {
        super(color)
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

const shapeColor = "purple"
const aCircle = new Circle(shapeColor)
aCircle.setColor("blue")
console.log(aCircle.render())

class Triangle extends Shape {




}

class Square extends Shape {

    constructor(color) {
        super(color)
    }

    render() {
        return `<rect width="100%" height="100%" fill="${this.color}" />`
    }


}