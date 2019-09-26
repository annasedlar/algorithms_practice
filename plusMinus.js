// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. 
// Print the decimal value of each fraction on a new line.


function plusMinus(arr) {
  let fractions = {
    plus: 0,
    minus: 0,
    zeros: 0
  }

  arr.map(number => {
      if(number === 0){
          fractions.zeros += 1;
      } else if (number > 0){
          fractions.plus += 1;
      } else if (number < 0) {
          fractions.minus += 1;
      }
  })

  let finalArray = [];

  for (const key in fractions) {
    finalArray.push(fractions[key]/arr.length)
  }
  return finalArray.join("\r\n")
}
