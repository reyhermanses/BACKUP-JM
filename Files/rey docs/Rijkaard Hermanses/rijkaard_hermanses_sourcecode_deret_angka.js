
let input = 5
let result = []

for(let i = 1; i <= input ; i++){
    let number = 0
    if(i < 2){
        number = i
        result.push(number)
    }else{
        number = (i-1) + (i-2)
        result.push(number)
    }
}

console.log(input)
console.log(result.toString().replaceAll(",", " ", true));