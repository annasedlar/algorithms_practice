// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

// Given an integer, n, find and print the number of letter a's in the first  letters of Lilah's infinite string.

// For example, if the string s = 'abcac' and n = 10, the substring we consider is abcabcabca, the first  10 characters of her infinite string. There are 4 occurrences of 'a' in the substring.

// Function Description

// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .

// Constraints

// For 25% of the test cases, n<= 10^6.
// Output Format

// Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.

// Sample Input:
// aba
// 10

// Sample Output: 7



function repeatedString(s, n) {
  // s = 'aba'
  // n = 10
  // output = 7
  // find number of 'a's
  // let numberOfAs = 0;

    // // Build Array
    // let wholeDivisors = s.length % n;
    // let remaining = n - (s.length * wholeDivisors);
    // let newArray = [];
    // for (let i = 0; i < wholeDivisors; i++){
    //     for(let i = 0; i < s.length; i++){
    //         newArray.push(s[i]);
    //         if(s[i] === 'a'){
    //             numberOfAs += 1; 
    //         }
    //     }
    // }
    // for(let i = 0; i < remaining; i++){
    //     newArray.push(s[i]);
    //     numberOfAs += 1; 
    // }

    // return numberOfAs;


    // solution found: https://stackoverflow.com/questions/53509604/js-repeated-string-hackerrank-challenge
    // comments my own
    
    // // turn s into array so you can filter it by a and find the length of new array
    // const as = s.split("").filter(char => char === "a").length;
    // //take whole number of times s appears
    // const times = parseInt(n / s.length);
    // //find remainder
    // const rest = n % s.length;

    // const totalAs = as * times
    //     //make new array from just the length of remainder, filter by a's, return length
    //     + s.slice(0, rest).split("").filter(c => c === "a").length

    // return totalAs; 

    //my refactor of the above: 
    const stringOfAs = s.split("").filter(character => character === "a");
    const lengthOfStringOfAs = stringOfAs.length;

    let multiplier = parseInt(n / s.length);
    let remainder = n % s.length;

    let totalAs = multiplier * lengthOfStringOfAs;
    totalAs = totalAs + s.slice(0, remainder).split("").filter(character => character === "a").length;
    
    return totalAs;
}

