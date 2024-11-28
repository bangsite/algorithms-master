/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};

const n = [4, 5, 6, 7, 0, 1, 2], target = 0;
const n2 = [4, 5, 6, 7, 0, 1, 2], target2 = 3;
const n3 = [1], target3 = 0;

console.log(search(n, target));
console.log(search(n2, target2));
console.log(search(n3, target3));
