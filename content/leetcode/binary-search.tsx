const jsSolution = `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var low = 0
    var high = nums.length - 1

    while (low <= high) {
        var mid = Math.floor((low + high),2 )

        if (nums[mid] == target) {
            return mid 
        }

        if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
        
    }
    return -1
}
`;

const goSolution = `func search(nums []int, target int) int {
    low, high := 0, len(nums) - 1

    for low <= high {
        mid := low + ( high - low ) / 2
        if nums[mid] == target {
            return mid
        }

        if nums[mid] < target {
            low = mid + 1
        } else {
            high = mid -1 
        }
    }
    return -1
}
`;

const pySolution = `class Solution:
    def search(self, nums: List[int], target: int) -> int:
        low = 0 
        high = len(nums) - 1
        while low <= high: 
            mid = (low + high) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] < target:
                low = mid + 1
            else: 
                high = mid - 1
        return -1
`;

const post = {
  num: 704,
  date: "2025-04-08T00:00:00Z",
  tags: ["array", "binary search"],
  code: [pySolution, goSolution, jsSolution],
  languages: ["Python", "Go", "Javascript"],
  children: <p>Do I really need to explain.</p>,
};

export default post;
