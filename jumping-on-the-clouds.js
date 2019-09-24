// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.
// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

// Complete the jumpingOnClouds function. It should return the minimum number of jumps required, as an integer.


// jumpingOnClouds has the following parameter(s):
// c: an array of binary integers
// Input Format

// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .
// Print the minimum number of jumps needed to win the game.

// Sample Input:
// 0 0 1 0 0 1 0

// Sample Output:
// 4

function jumpingOnClouds(c) {
  let numberOfJumps = 0; 
  let currentJumpPosition = 0;

  while(currentJumpPosition < c.length){
      //  console.log(c[currentJumpPosition + 2])
      if(c[currentJumpPosition + 2] === 0 && (currentJumpPosition + 2) < c.length ) {
          console.log("SAFE, add two to position")
          currentJumpPosition = currentJumpPosition + 2;
          numberOfJumps += 1;
      } else {
          if ((currentJumpPosition + 1) < c.length ){
          console.log("DANGER, add one to position")
          currentJumpPosition = currentJumpPosition + 1;
          numberOfJumps += 1;
          } else {
              break;
          }
      }
  }
  return numberOfJumps;
}