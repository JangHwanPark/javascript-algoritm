/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    const count = {};
    nums.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] > 2) {
            nums.splice(i, 1);
            i--;
            count[nums[i]]--;
        }
    }

    return nums.length;
};

let nums = [1,1,1,2,2,3];
console.log(removeDuplicates(nums))