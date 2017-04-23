// Write code to perform the following task:
// Take any natural number n (1..infinity). 
// If n is even, divide it by 2 to get n / 2.
// If n is odd, multiply it by 3 and add 1 to obtain 3n + 1. 
// Repeat the process indefinitely. 
// The conjecture is that no matter what number you start with, 
// you will always eventually reach 1.

function alwaysOne(n){
  while(n > 1){
    if(n % 2 === 0){
        n = n/2;
    }else{
      n = (n*3)+1;
    }
  }
  return(n)
}

alwaysOne(100000343534534534430);
