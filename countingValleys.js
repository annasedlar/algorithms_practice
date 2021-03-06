// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

// Function Description

// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter(s):

// n: the number of steps Gary takes
// s: a string describing his path
// Input Format

// The first line contains an integer , the number of steps in Gary's hike.
// The second line contains a single string , of  characters that describe his path.




// Output Format:
// a single integer that denotes the number of valleys Gary walked through during his hike.

// Sample Input:
// 8
// UDDDUDUU

// Sample Output:
// 1


// If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

// _/\      _
//    \    /
//     \/\/

// He enters and leaves one valley.


function countingValleys(n, s) {
  let numberOfAbsoluteValleys = 0; 

  //sea level
  let currentAltitude = 0;

  //track each step
  for (let i = 0; i <= n; i++){
      if(currentAltitude === 0){
          if(s[i] === "D"){
              console.log("START A VALLEY")
              numberOfAbsoluteValleys += 1;
          }
      }
      //need to know if we go negative THEN positive = 1 valley
      if(s[i] === "U") {
          console.log('uphill');
          currentAltitude += 1;
      } else {
          console.log('downhill');
          currentAltitude -= 1; 
      }
  }
  return numberOfAbsoluteValleys;
}



// REFACTOR

function countingValleys(n, s) {
  //convert string into array (to use forEach() )
  let stepArray = s.split('');
  let numberOfAbsoluteValleys = 0; 

  //sea level
  let currentAltitude = 0;

  //track each step
  stepArray.forEach(step => {
      if(currentAltitude === 0 && step === 'D'){
          numberOfAbsoluteValleys += 1;
      }
      //need to know if we go negative THEN positive = 1 valley
      step === 'U' ? currentAltitude += 1 : currentAltitude -= 1;
  });
  return numberOfAbsoluteValleys;
}
