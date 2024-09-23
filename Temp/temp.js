/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

  let nums2 = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 2]) {
        nums.splice(i + 1, 1);
    }
    
    if (nums[i] == nums[i + 2]) {
      nums.splice(i, 1);
    }
  }

 for (let i = 0; i < nums.length; i++) {
   if (nums[i] == nums[i + 2]) {
     nums.splice(i + 1, 1);
   }

   if (nums[i] == nums[i + 2]) {
     nums.splice(i, 1);
   }
 }

  console.log(nums)
  return nums.length;

};


removeDuplicates([0, 0, 0, 0, 0]);
