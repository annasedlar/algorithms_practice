function quicksort(arr){
	if(arr.length ==0){
		return [];
	}

	var right =[];
	var left = [];
	var pivot = arr[0];

	for(var i=1; i < arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	return quicksort(left).concat(pivot, quicksort(right));
}

quicksort([2, 34, 2, 34, 6, 45, 435, 7, 3, 99]);