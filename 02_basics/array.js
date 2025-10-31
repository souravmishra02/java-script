// //  Array

// let  myArray = [0,1,2,3,4,5] //first array
// // console.log(myArray[0]);

// let arr = new Array("sourav", "deepu")
// arr2.push("nikhil")
// // console.log(arr2);

// // Array Methods

// // 1.push myarr.push()
// let arr2 = new Array("sourav", "deepu")
// arr2.push("nikhil")
// // console.log(arr2);

// //  2.Pop myarr.pop().  no arguments we will give pop out the last element 
// // 3. myarr.unshift(9).  value will be started in the first 

// // 4. myarr.unshift(8) add the value in the first of the array
// //  5. arr.shift() remove the added unshift value from the array
// //  6. arr.includes(4) it will tell that the element will be there in the array or not and its of bollean type
// // 7. arr.indexof(5) it will tell the index of the asked element if there is no elemnt present it will return -1;

// // important operation
// const arrays = [0,1,3,4,5]
// const arraty = arrays.join()
// // console.log(arrays); // it will return the object typeof 
// // console.log(arraty); // it will return the string typeof


//slice operation 
const sou = [0,1,2,3,4]
const pap = sou.slice(1,4) // it does not modified the array it will print the array originally
console.log(pap);
console.log(sou);


//splice operation

const sar = [0,1,2,3,4]
const bap = sar.splice(1,4).  
console.log(bap);   // In splice it will modify the original array as remove the splice part from the array
console.log(sar);
