

function writeCards(names) {
    let thank_you = []
    for (let i = 0; i < names.length; i++) {
        thank_you.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thank_you 
}

function countDown(number) {
    while (number >= 0 ) {
        console.log (number)
        number -- 
    }
    return null 
}