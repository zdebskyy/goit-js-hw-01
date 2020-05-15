const credit = 23580;
const pricePerDroid = 3000;
let message;

let droidNumber = prompt('How many droids do you want?');
droidNumber = Number (droidNumber);

const totalPrice = droidNumber * pricePerDroid;
const creditAmount = credit - totalPrice;

if (droidNumber === null){
    message = 'Canceled'
    console.log(message); 
}else if(droidNumber < 1){
    message = 'Wrong value'
    console.log(message);     
}else if(totalPrice > credit){
    message = 'Not enougth money'
    console.log(message);
}else if (totalPrice <= credit && droidNumber === 1){
    console.log(`You bought ${droidNumber} droid, ${creditAmount} credits remaining.`);
}else {
    totalPrice <= credit && droidNumber > 1;
    console.log(`You bought ${droidNumber} droids, ${creditAmount} credits remaining.`);
}




