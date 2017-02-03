// Create a function convertPhone that validates a str and converts it to a valid phone number.
// You MUST use .match and pass a regular expression. Whatever string is passed in, the function
// must format it into format: 555-555-5555. Extra numbers are assumed a mistake and dropped. If
// not enough numbers are provided in the string, return an error message. It is a good idea to 
// make use of join, split, and other array functions as you are likely to hop back and forth.
// BONUS: if not enough numbers are provided, check to see if there are any letters that can be 
// converted to numbers via the number pad mapping.

// Consider the possible inputs:
// 555-555-5555
// (555)555-5555
// 555 555 5555
// 555 555-555
// 1-555-555-5555
// (1)555-555-5555
// 5555555555
// 555-five-55-aebdgtxi;;3tt4greqr6seven
// 5-trumprules-555-5-5-5-5-5-5
// 2798504trumpforprez23587928579428795458792
// 1-800-ninjas-are-cool
// 1900-acdc4life.

function convertPhone(phoneStr){
  var phoneAsString = phoneStr.toString();
  console.log(phoneAsString);
  var length = phoneAsString.length;
  console.log(length);
  
  if(length<10){
    console.log("You must provide a number with 10 digits");
  }else if(length>10){
    var perfLength = phoneAsString.slice(0, 10)
    console.log("Your number is to long, let's chop it!"); 
    console.log(perfLength);
    return perfLength; 
  }else if(length===10){
    console.log("your number is PERFECT!");
    var perfLength = phoneStr;
    return perfLength;
  }
  
  
  
}

convertPhone(1234567890123456);