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
    const charArr = [...message]
    let newMsg = ''
    for (const char of charArr) {
        const checkLetter = char.toLowerCase().match(/[a-z]/)
        const isLetter = checkLetter != null && checkLetter[0] === char
        if (isLetter) {
            const randomNumber = Math.floor(Math.random() * 2) + 1
            randomNumber===1 ? newMsg += char.toLowerCase() : newMsg += char.toUpperCase()  
        }
    }
    console.log(newMsg)
}


// internetShout('abc123')
internetShout('abcdefghijklmnopqrstuvwxyz')

const randomNum = () => {
    const rn = Math.floor(Math.random() * 2) + 1
    console.log(rn)
}

// randomNum()

