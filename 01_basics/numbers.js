// Numbers
const score = new Number(123.454)

// console.log(score.toString().length); // convert to string and then calculate the length

// console.log(score.toFixed(1)); // fixed method

// console.log(score.toPrecision(3)); //to precisiom method


const hun = 10000000
// console.log(hun.toLocaleString('en-IN'));


// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
// formula we will use for the random 
// console.log(Math.floor(Math.random() *(max-min +1))+ min)



console.log(Math.floor(Math.random()*(max - min + 1))+ min)
