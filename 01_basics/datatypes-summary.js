// There are two types of Data types
// premitive Data Types
// Non premitive/ Reference 
//  In premitive there are 7 types of data types: "String", Number, Boolean , Null , Undefined , symbol, BigInt
// Reference type (non premitive) arrays, objects , functions

//  JavaScript is dynamically types language or statically type language. as we dont  : dynamically typed

//  Function actually return function and we call them object function 

// const isLoggedIn = function()
// {
//     if(2>0){
//         console.log("True")
//     }
//     else{
//         console.log("False");
        
//     }
// }
// isLoggedIn()


// There are two types of memory 
// Heap memory and stack memory 
//  Stack memory is used for primitive datatypes as whereever stack memory is used we will get the copy of the varibale which we created in this when ever we want to do any changes we will do that in the copy first and then it reflect 
//  Heap memory is used for the non primitive datatypes as whenever the heap memory is used we will get the reference of the varibale which we create and then we do the changes in the original variable


// Stack(primitive datatype) - string nmmber, bollean, null , undefined, symbol , bigInt
//  heap(refrence) - array , object , function 


let id = "sourav"
let another = id
console.log(id)