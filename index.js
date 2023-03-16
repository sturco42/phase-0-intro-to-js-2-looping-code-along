const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

function countDown() {
    for (let countDown = 10;
        countDown > -1;
        countDown--) {
            console.log(countDown)
        }
}

// writeCards(names, "birthday");

// ----------------------------------------
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);
// -----------------------------------------
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }