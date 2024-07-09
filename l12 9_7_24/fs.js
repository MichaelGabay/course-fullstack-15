const fs = require("fs");


function doSomthing(isOk) {
    return new Promise((resolve, reject) => {
        if (isOk) {
            resolve("all done");
        }
        else reject("there was an error")
    })
}

// doSomthing(false).then((msg)=>{console.log(msg)}).catch((m)=>{console.log(m)})

// fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
//     .then(resp => resp.json()
//         .then(data => console.log(data)))
//     .catch((err) => { console.log(err) });

async function getProducts() {
    try {
        const resp = await fetch("https://makeup-api.herokuapp.com/api/v1000/products.json?brand=maybelline");
        const data = await resp.json()
        console.log(data)
    } catch (error) {
        console.log("my error",error)
    }
}

getProducts()


// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arr.filter = function (callback) {
//     const newArray = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) newArray.push(this[i])
//     }
//     return newArray
// }



