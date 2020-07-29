const credit = 23580;
const pricePerDroid = 3000;
let message;


let droidNumber = prompt("How many droids do you want?");

if (!droidNumber) {
message = "Canceled";
} else if (Number(droidNumber) < 1) {
message = "Wrong value";
} else {
const totalPrice = Number(droidNumber) * pricePerDroid;
if (totalPrice > credit) {
message = "Not enougth money";
} else {
const creditAmount = credit - totalPrice;
message = `You bought ${droidNumber} droids, ${creditAmount} credits remaining.`;
}
}
console.log(message);