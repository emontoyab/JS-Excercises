const weight = 74;
const height = 1.74;

let BMI = weight/(height**2);
let message;

if (BMI < 18.5){
    message = "Low weight"
} else if (18.5 < BMI < 24.9){
    message = "normal weight"
} else {
    message = "Obesity"
}

console.log(message)