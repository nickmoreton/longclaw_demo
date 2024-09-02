// Example of ES6 syntax
import imported from "./imported";
import Modal from "./modal";

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

let modal = new Modal().init();
