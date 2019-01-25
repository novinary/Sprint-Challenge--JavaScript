// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass {
    constructor (att){
        this.length = att.length;
        this.width = att.width;
        this.height = att.height;
    }
    volume () {
        return this.length * this.width * this.height;
    }
    surfaceArea () {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}
const cuboid2 = new CuboidMakerClass({
    length: 3,
    width: 15,
    height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid2.volume()); 
 console.log(cuboid2.surfaceArea()); 

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerClass {
    constructor(cubeAtt){
        super(cubeAtt);
    }
    volume(){
        return this.length * this.length * this.length;
    }
    surfaceArea() {
        return (6 * (this.length * this.length));
    }
}

const cube = new CubeMaker({
    length: 14
})
console.log(cube.volume()); 
console.log(cube.surfaceArea()); 