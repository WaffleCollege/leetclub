/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
	const num = {};

	for(let i=0; i<nums.length; i++){
			let a = target - nums[i];
			
			if(num.hasOwnProperty(a)){
					return [num[a],i];
			}
			
			num[nums[i]] = i;
	}
}

//test
const nums = [2,5,7,9];
const target = 11;
console.log(twoSum(nums,target));