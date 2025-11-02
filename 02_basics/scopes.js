// const a = 10;
// let b = 20;
// var c = 30;
let a = 10; //global scope

if(true){
    const a = 10;    //block scope 
    let b = 20;

}
// console.log(a); it will return the error as outside it will not come of scope 
// console.log(b); it will return the error as outside it will not come of scope 
// console.log(c);   //. it will return the value outside the scope of that's why we are not using the var variable 

function one(){
    const username = "sourav"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);   it will give error as it is outside the scope 
    
    two() //it will print the username as its console inside the scope

}
one() // this function is called 

const username = {
    name: "sourav",
    age: 20,
    email : "souravku@gmail.com"
}

console.log(username.name);

