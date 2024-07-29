function C2F (Celsius){
    return Celsius*(9/5)+32
}

function F2C (Farenheit){
    return (Farenheit-32)*(5/9)
}

console.log(`${C2F(17)} F`)
console.log(`${F2C(62.6)} °C`)