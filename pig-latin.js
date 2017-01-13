// Translate a given string to pig latin.

// Take the first constant or consanant cluster and move it to the end of the word with the suffix "ay".
// E.g., "Hello" becomes, "ellohay." "Jim" becomes "imjay." "Doritos" becomes "oritosday"
// If the word starts with a vowel you simple add way to the end.
// E.g. "Arthur" becomes "arthuray."
// Test words :
// California -> aliforniacay
// Paragraphs -> aragraphspay
// Glove -> oveglay
// Bread -> eadbray
// Algorithm -> algorithmway
// Eight -> eightway
// Pass the string into a function and return the result. Check out indexOf, join, split, and substr


var vowelWordPig;
var pigLatin = function(string){

  var lowerString= string.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u", "y" ];
  var indexOfVowel = 0;
  if(vowels.indexOf(lowerString.charAt(0)) > -1){
    vowelWordPig = lowerString.concat("way")
  }else{
    for(var i= 0; i < vowels.length; i++){
     if((lowerString.indexOf(vowels[i])) > -1){
      // found a vowel
         indexOfVowel = lowerString.indexOf(vowels[i])
      }
    }
  }
  var newString = lowerString.slice(indexOfVowel, lowerString.length) + lowerString.slice(0, indexOfVowel) + "ay"
  
  console.log(vowelWordPig);
  console.log(newString)
};
pigLatin("bread"); 