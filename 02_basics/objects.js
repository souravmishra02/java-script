//  singleton -> if we declare by construtor

//  object literals -> declaration of object havign many instance

const mUser= {
    name : "sourav",
    age: 24,
    email: "souravkumishra02@gmail.com",
    location: "Delhi",
    isLoggedIn: false

}
// console.log(mUser.email);
// console.log(mUser["age"]);


//  create a symbol and add that in the object and print that as a key in the object

const mysym = Symbol("key1")

const obj1 = {
    name : "sourav",
    age: 23,
    [mysym]: "keymy1"
}
// console.log(obj1);


//  function creating of greeting

obj1.greeting = function(){
    // console.log("helllo world");
}

obj1.greetingtwo = function(){
    // console.log(`hello js useer ${this.name}`);
}
// console.log(obj1.greetingtwo());


// singleton 
const usersname = {
    email: "samyy@gmail.com",
    name: {
        fullname: {
            firstname: "sourav",
            lastname: "Mishra"
        }
    }
}
// console.log(usersname.name.fullname.firstname);


//  combine the objects

const obj4 = {1:"a", 2: "b"}
const obj5 = {3:"c", 4: "d"}
const obj6 = {...obj4, ...obj5}
// console.log(obj6);


const cources ={
    coursename: "Java",
    courseprice: "900",
    coursetutor: "sourav"
}
const {courseprice} = cources
console.log(courseprice);