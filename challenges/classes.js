// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    const volume = this.length * this.width * this.height;
    return volume;
  }
  surfaceArea() {
    const surfArea =
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height);
    return surfArea;
  }
}

const cuboid = new CuboidMaker(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Record Cuboid volume and surface area with class:");

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
  constructor(length, width, height) {
    super(length, width, height);
  }
  volume() {
    const volumeCube = this.length * this.width * this.height;
    return volumeCube;
  }
  surfaceArea() {
    const surfCube = 6 * this.length * this.width;
    return surfCube;
  }
}
const makeMeaCube = new CubeMaker(5, 5, 5);
console.log("Record cube volume and surface area with extended class:");
console.log(makeMeaCube.volume());
console.log(makeMeaCube.surfaceArea());
