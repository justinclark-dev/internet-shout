/**
 * Internet Shout coding challenge
 * 
 * Write a function or functions that take a 
 * string and convert it into an internet shout:
 * 
 *      Hello, how are you? -> hEllO, hOW, aRE yoU?!!?!!?
 *      I am fine. -> i aM FIne!11!1!!
 *      This will do the following:
 *      Randomly capitalize letters
 *      Convert ? to random number of ? and !
 *      Convert . to random number of ! and 1
 */

/**
 * google searched: "get first letter of string javascript"
 * https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript#9862788
 */


const internetShout = (message) => {
    /*
    Add word parsing:
    const charArr = [...message]
    let newMsg = ''
    for (const char of charArr) {
        const checkLetter = char.toLowerCase().match(/[a-z]/)
        const isLetter = checkLetter != null && checkLetter[0] === char.toLowerCase()
        if (isLetter) {
            const randomNumber = Math.floor(Math.random() * 2)
            if (randomNumber === 0) newMsg += char.toLowerCase()
            else if (randomNumber === 1) newMsg += char.toUpperCase() 
        } else if (char === ' ') {
            console.log('space')
        }
    }*/
    const charArr = [...message]
    let newMsg = ''
    for (const char of charArr) {
        const checkLetter = char.toLowerCase().match(/[a-z]/)
        const isLetter = checkLetter != null && checkLetter[0] === char.toLowerCase()
        if (isLetter) {
            const randomNumber = Math.floor(Math.random() * 2)
            if (randomNumber === 0) newMsg += char.toLowerCase()
            else if (randomNumber === 1) newMsg += char.toUpperCase() 
        } else { 
            if (char === '?') {
                const randomNumber = Math.floor(Math.random() * 5) + 1
                for (let i=0; i<randomNumber; i++) {
                    const randomYesNo = Math.floor(Math.random() * 2)
                    if (randomYesNo === 0) {
                        const randomQM = Math.floor(Math.random() * 2) + 1
                        newMsg += '?'.repeat(randomQM)
                    } else if (randomYesNo === 1) {
                        const randomBangs = Math.floor(Math.random() * 2) + 1
                        newMsg += '!'.repeat(randomBangs)
                    }
                }
            }
            else if (char === '.') {
                const randomNumber = Math.floor(Math.random() * 5) + 1
                for (let i=0; i<randomNumber; i++) {
                    const randomYesNo = Math.floor(Math.random() * 2)
                    if (randomYesNo === 0) {
                        const randomBangs2 = Math.floor(Math.random() * 2) + 1
                        newMsg += '!'.repeat(randomBangs2)
                    } else if (randomYesNo === 1) {
                        const randomOnes = Math.floor(Math.random() * 2) + 1
                        newMsg += '1'.repeat(randomOnes)
                    }
                }
            } else {
                newMsg += char
            }
        }
    }
    console.log(newMsg)
}

// internetShout('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
internetShout('I am fine.')
internetShout('Hello, how are you?')
// internetShout('Abc123')
// internetShout('Abcdefghijklmnopqrstuvwxyz')
// internetShout('???...')
// internetShout('.')


