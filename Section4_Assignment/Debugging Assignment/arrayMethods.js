function sliceElements(givenArray) { 
  //return givenArray.slice(-3)
}

function spliceElements(givenArray, element1, element2) {
    givenArray.splice(-1, 2, element1, element2)
    return givenArray
}

function splitElements(givenString) {
  return givenString.split(" ")
}

//console.log(sliceElements([1, 2, "MIT Certificate", 4, 5])); 
//console.log(sliceElements([1, 2, [3, 4], "JavaScript"]));

var arr = [1, 2, "MIT Certificate", 4, 5];
console.log(spliceElements(arr, "JavaScript", 101)); 

//var str = "MIT Certificate loves JavaScript";
//console.log(splitElements(str)); 

if (typeof module !== 'undefined') {
  module.exports = { sliceElements, spliceElements, splitElements };
}