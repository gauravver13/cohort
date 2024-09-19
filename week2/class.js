

// class Rectangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area(){
//         const area = this.width * this.height
//         return area
//     }

//     paint(){
//         console.log(`Painting with color ${this.color}`);
        
//     }
// }

// const rect = new Rectangle(20, 10, "Blue")
// const area = rect.area();
// console.log(area);
// rect.paint()

// function random(){

// }

// console.log('Hello world');



// const p = new Promise()

// console.log(p);

const fs = require("fs");


function readTheFile(){

}
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function callback() {
      console.log("3 seconds have passed");
  }
  
  setTimeoutPromisified(3000).then(callback)

  setTimeoutPromisified()