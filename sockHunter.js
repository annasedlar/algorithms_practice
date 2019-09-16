// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock (ar) and the number of socks (n), 
// determine how many pairs of socks with matching colors there are.




function sockMerchant(n, ar) {

  let pairs = 0;

  let sockObj = {};
  //construct an object to track colors + count
  //could also loop until i <= n
  for(let i = 0; i <= ar.length; i++){
      //if arr[i] doesn't exist in the obj yet, add it
      if (!sockObj.hasOwnProperty(ar[i])) {
          sockObj[ar[i]] = 1;
      } else {
          sockObj[ar[i]]++;
      }
  }

    //check for each color, if count % 2 = 0.
    for(let color in sockObj){
      let pairsOfACertainColor =sockObj[color] / 2; 
      pairsOfACertainColor = Math.floor(pairsOfACertainColor);
      pairs = pairs + pairsOfACertainColor;
  }

  return pairs;
};
