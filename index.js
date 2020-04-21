// Code your solutions in this file

const nameArray = ['Andrew', 'Sharon', 'Amber', 'Ashleigh', 'Jessica', 'Jolynn']

let cardsArray = []

function writeCards(names, event) {
    for (const el of names) {
        cardsArray.push(`Thank you, ${el}, for the wonderful ${event} gift!`);
    }
    
    return cardsArray
}

// console.log(writeCards(nameArray, 'birthday'))

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number -= 1
    }
}
