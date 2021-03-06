// Create a function convertPhone that validates a str and converts it to a valid phone number. 
// You MUST use .match and pass a regular expression. Whatever string is passed in, the function 
// must format it into format: 555-555-5555. Extra numbers are assumed a mistake and dropped. 
// If not enough numbers are provided in the string, return an error message. It is a good idea to
// make use of join, split, and other array functions as you are likely to hop back and forth.
// BONUS: if not enough numbers are provided, check to see if there are any letters that can be 
// converted to numbers via the number pad mapping.
 
function convertPhone(phoneStr){
  var perfLength;
  var phoneAsString = phoneStr.toString();
  console.log(phoneAsString);
  var length = phoneAsString.length;
  console.log(length);
  
  // If there are less than 10 characters, provide error
  if (length<10){
    console.log("You must provide a number with 10 digits");
  } else if(length >= 10){
    // if the number were formatted perfectly, it would have 10 characters
    perfLength = phoneAsString.slice(0, 10)
    
    // divide number into it's parts
    var firstThree = perfLength.slice(0,3);
    var secondThree = perfLength.slice(3,6);
    var lastFour = perfLength.slice(6, 10);
    
    // add formatting for readability
    var newStringPhoneNum = firstThree + "-" + secondThree + "-" + lastFour;

    // print formatted phone number
    console.log(newStringPhoneNum)

    // define new variable to match 
    var phoneRegEx = newStringPhoneNum.match(/\d{3}.\d{3}.\d{4}/);
    // if it's a match
    if(phoneRegEx){
      // return phone number
      console.log(phoneRegEx);
    }else{
      // alert user with error
      console.log("Not a valid format");
    }
  }
}

convertPhone('1234567890123456');
convertPhone('555-555-5555');
convertPhone('(555)555-5555');
convertPhone('555 555 5555');
convertPhone('1-555-555-5555');
convertPhone('5555555555');
convertPhone('555-five-55-aebdgtxi;;3tt4greqr6seven');
convertPhone('5-trumprules-555-5-5-5-5-5-5');
convertPhone('2798504trumpforprez23587928579428795458792');
convertPhone('1-800-ninjas-are-cool');
convertPhone('1900-acdc4life.');
