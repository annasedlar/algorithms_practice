var creditCardRegEx = /\d{16}/;


function checkCard(creditCardNumber){
  var ccNumString = creditCardNumber.toString();
  if(ccNumString.length ==16 || ccNumString.length==15){
    if(ccNumString.match(/3[74]\d{13}/)){
      console.log("valid amex card and it has 15 digits!")
    }else if(ccNumString.match(/4\d{15}/)){
      console.log("valid visa card which has 16 digits!")
    }else if(ccNumString.match(/6011\d{12}/)){
      console.log('valid discover card with 16 digits!')
    }else if(ccNumString.match(/[50-55]\d{14}/)){
      console.log('valid mastercard with 16 digits starting with 50-55');
    }else{
      console.log("invalid credit card number, please try again")
    }
  }else{
    console.log("invalid credit card number, please try again")
  }
  
}
checkCard(341515151515151);
checkCard(41616161616161616);
checkCard(6011161616161616);
checkCard(5011161616161616);
checkCard(128437239);

// Write a JavaScript program to validate that a credit card number:
// It must have 16 digits, unless it starts with 37 or 34. Then, and only then, it MUST have 15 digits
// It must start with one of the folliowing. Print off "valid" and the type of card
// 6011 = Discover Card
// 37 or 34 = American Express
// 4 = Visa
// 50-55 = MasterCard