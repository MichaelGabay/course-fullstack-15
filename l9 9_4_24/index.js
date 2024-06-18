

function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10
        num = (num / 10).toFixed(0)
    }
    return sum
}

// function func(left, right) {
//     let maxSam = 0;
//     for (let i = left; i < right; i++) {
//         if (sumDigits(i) > sumDigits(maxSam)) maxSam = i;
//     }
//     console.log(maxSam)
// }



let go=function(){
    
}

const person = {
    fullName: {
        firstName: "michael",
        lastname: "gabay"
    },
    age: 2,
    nickname: "miki",
    go(){
        console.log("i am going to be online today")
    }
}

person.go()


const arr = ["red","blue","green","yellow"]
arr.push("pink")


console.log(typeof arr)






















