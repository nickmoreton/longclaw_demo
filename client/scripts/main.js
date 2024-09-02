// Example of ES6 syntax
import imported from "./imported";

class Main {
  constructor() {
    this.message = 'Hello, world!';
  }
  say() {
    console.log(this.message);
  }
}

let main = new Main();
main.say();
imported();
