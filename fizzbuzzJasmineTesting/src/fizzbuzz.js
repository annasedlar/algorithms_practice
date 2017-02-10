
// Defining fizzbuzz. Must return a value to be defined and thus pass our first test
function fizzbuzz(input = null){
	// if(input==1){
	// 	return 1;
	// }else if(input ==2){
	// 	return 2; 
	if((input %3==0) && (input %5 ==0)){
		return "fizzbuzz";
	}else if(input % 3==0){
		return "fizz";
	}else if(input % 5 ==0){
		return "buzz";
	}else{
		return input;
	}
}

