/*

Task 6: Use map to capitalize the first letter of each word in a sentence.
Write a JavaScript function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.
*/

function capitaliseFirstLetter(sentence){
    let words = sentence.split(' ');
    let capWords = words.map(x => {
        return x.charAt(0).toUpperCase()+x.slice(1)
    })
    let capSentence = capWords.join(' ');
    return capSentence;
}

let sentence = "hi my name is susmita singh"
console.log("First letter capatalised for the given sentence is: ", capitaliseFirstLetter(sentence))