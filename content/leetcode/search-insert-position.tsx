import { Problem } from "@/components/slug-helpers";

const pySolution = `class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        low = 0
        high = len(nums) - 1

        while low <= high:
            mid = (high + low) // 2
            if nums[mid] == target:
                return mid

            if nums[mid] < target:
                low = mid + 1
            else: 
                high = mid - 1
        
        return low

`;

const post = {
  num: 35,
  date: `2025-04-28T12:00:00Z`,
  tags: ["array", "binary search"],
  difficulty: `easy`,
  languages: [`Python`],
  complexity: {
    time: `O(log n)`,
    space: `O(log n)`,
  },
  performance: { time: 100, memory: 25 },

  code: [pySolution],

  children: (
    <div>
      <Problem
        items={[
          `Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
`,
          `You must write an algorithm with O(log n) runtime complexity.
`,
        ]}
      />
    </div>
  ),
};

export default post;
