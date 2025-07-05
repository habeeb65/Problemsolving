// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twosum (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
}

console.log(twosum([2, 7, 11, 15], 9)); // [0, 1]

// Time complexity: O(n)
// Space complexity: O(n) for the map data structure
// REason for using a map is for performance or i would have used a brute force approach which would be ideal 
// if there is no requirement for performance or it is a small array 
// but if there is a requirement for performance then a map would be the best approach


