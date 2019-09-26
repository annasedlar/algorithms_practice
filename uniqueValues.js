// Create a function that accepts an array parameter with duplicate values 
// and returns a new array without duplicates.

function filterArray(arr) {
	let uniques = [];
	arr.map(value => {
		if (! uniques.includes(value) ) {
			uniques.push(value)
		}
  })
  console.log(uniques)
}

filterArray([1,1,2,2,2,2,2,2,2,3,4,5,5,6,2,7,9,10,4,5]);
