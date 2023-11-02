//properties of array

var treats = ['cake','cupcake','icecream','muffin','candy'];
console.log(treats);

treats.push('cookie');
//console.log(treats);
treats.push('pie');
treats.push('ricecrispy') 
console.log(treats);


//treats.pop();
//console.log(treats)

console.log(treats[2]);


//finding the average
var marks = [100,70,80,90];
console.log(marks);
console.log("lenght of the array:",marks.length);
function scoreAverage(){
  var sum = marks[0]+marks[1]+marks[2]+marks[3];
  console.log(sum);
  var avg = sum/marks.length;
  console.log("The average of marks",avg);
}
function setup() {
  createCanvas(400, 400);
  scoreAverage();
}

function draw() {
  background(220);
}