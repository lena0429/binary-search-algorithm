// Find First and Last Position of Element in Sorted Array
// Given an array of integers 'nums' sorted in ascending order, 
// find the starting and ending position of a giben 'target' value

// ---------------------------------------------------------
// Example 1 :
// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output = [3, 4]

// Binary Search: 
// step 1 - how to find left:
// if (mid >= target) => right = mid
// else if mid < target => left = mid + 1
// note that when (mid == target) meaning that both the left and right pointer point to mid
// step 2 - how to find right:
// if (mid > target) => right = mid
// else (mid <= target) => left = mid + 1

let searchRange = (nums, target) => {
    let n = nums.length;
    let findLeft = function(isLeft){
        let left = 0;
        let right = n;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > target || (isLeft && nums[mid] == target)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    let begin = findLeft(true)
    if (begin == n || nums[begin] !== target) {
        return [-1, -1]
    }

    let end = findLeft(false);
    return [begin, end - 1];
}

// Time Complexity: O(log n)