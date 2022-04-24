var words = ["This", "is", "JavaScript", "Bootcamp!"];
var sentence = "";

function createSentence(givenArray) {
    for (var word in givenArray) {
        sentence += `${givenArray[word]} `
    }
    return sentence
}

console.log(createSentence(words));