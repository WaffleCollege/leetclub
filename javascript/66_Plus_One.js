/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	let i = 1;
	while(digits[digits.length-i]===9){
			digits[digits.length-i] = 0;
			i++;
	}
	digits[digits.length-i] = digits[digits.length-i] + 1;
	
	if(digits[0]==0){
			digits.unshift(1);
	}
	return digits;
};