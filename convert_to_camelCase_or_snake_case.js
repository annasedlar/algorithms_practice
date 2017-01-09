// Case Convert
// Write a function caseConvert that accepts two arguments. The first is a string, the second is type. If the type is "camelcase" then convert the string to camelcase (each word except the first is capitalized, no spaces). If type is "snakecase" then convert the string to snakecase (each word is separated by a - and all lowercase). As a bonus, accept a string or an array. If it's an array, use .join and proceed accordingly.
 

// function caseConvert(str, conversionType){
//  //Your code here!!
//  return convertedStr;
// } 


function caseConvert(str, conversionType){
	if(conversionType === 'camelcase'){
		var spaceIndex = str.split("-");
		for (var i = 1; i < spaceIndex.length; i++) {
			spaceIndex[i] = spaceIndex[i].replace(spaceIndex[i][0], spaceIndex[i][0].toUpperCase())
		}
		var string = spaceIndex.join('')
		console.log(string)
	}else if(conversionType === 'snakecase'){
		while(str.indexOf('-')!= -1){
			str = str.replace('-', '_');
		}
		console.log(str)
	}
}
caseConvert('ha-ba2-ca3-da4', 'camelcase')
caseConvert('ha-ba2-ca3-da4', 'snakecase')


// Write a Roman numeral converter. The program should be passed an integer and return the correct Roman numeral.
// If you finish early, please do the reverse. Accept a roman numeral, and convert it to an integer
// Rules: http://www.factmonster.com/ipka/A0769547.html
// Your converter should work up to 1009




































			
var SandraTheApe = `

//          SANDRA THE APE		
//                 _
//             ,.-" "-.,
//            /   ===   \
//           /  =======  \
//        __|  (o)   (0)  |__
//       / _|    .---.    |_ \
//      | /.----/ O O \----.\ |
//       \/     |     |     \/
//       |                   |
//       |                   |
//       |                   |
//       _\   -.,_____,.-   /_
//   ,.-"  "-.,_________,.-"  "-.,
//  /          |       |          \
// |           l.     .l           |
// |            |     |            |
// l.           |     |           .l
//  |           l.   .l           | \,
//  l.           |   |           .l   \,
//   |           |   |           |      \,
//   l.          |   |          .l        |
//    |          |   |          |         |
//    |          |---|          |         |
//    |          |   |          |         |
//    /"-.,__,.-"\   /"-.,__,.-"\"-.,_,.-"\
//   |            \ /            |         |
//   |             |             |         |
//    \__|__|__|__/ \__|__|__|__/ \_|__|__/  

   `;

console.log(SandraTheApe);





