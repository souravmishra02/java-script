let userOne = {
    email: "souyra@gmail.com",
    upi: "33432@ybl"
}

let userTwo = userOne
userTwo.email = "user@gmail.com"


console.log(userOne)  // it will change the userone email too as it will give the references