import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func minSubArrayLen(target int, nums[]int) int {
  left, right := 0, 0
  n:= len(nums)
  candidate:= 0
  sum:= 0

  for right <= n {
    window:= nums[left: right]

    if sum < target {
      if right <= n - 1{
    sum += nums[right]
  }
  right++
} else if sum >= target {
  candidate = getCandidate(candidate, len(window))
  sum -= nums[left]
  left++
}
    }

return candidate
}

func getCandidate(a, b int) int {
  if a == 0 {
    return b
  }

  if a < b {
    return a
  }

  return b
}
`;

const post = {
  num: 209,
  date: `2025-05-31T12:00:00Z`,
  tags: ["array", "sliding window", "prefix sum"],
  difficulty: `medium`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(1)`,
  },
  performance: { time: 100, memory: 95 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
`,
        ]}
      />

      <Approach
        items={[
          `Use the sliding window (two pointer) technique.`,
          `Start with both pointers at the beginning of the array. Expand the window by moving the right pointer while the sum is less than the target.`,
          `Once the sum becomes ≥ target, attempt to shrink the window by moving the left pointer to find a smaller valid subarray.`,
          `Track the minimal length of all valid windows.`,
          `Repeat until the right pointer reaches the end of the array.`,
          `This approach ensures the entire array is only scanned once, giving linear time complexity.`,
          `Example trace (target = 7, nums = [2,3,4,1,2,4,3]):
     - window grows: [2], [2,3], [2,3,1], [2,3,1,2]
     - window meets/exceeds target: [2,3,1,2] → try to shrink
     - shrink and re-expand as needed
     - find shorter valid subarrays like [1,2,4] and [4,3]`,
        ]}
      />
      <Reflections
        items={[
          `This problem reinforced the power of the sliding window technique when dealing with contiguous subarrays and sum conditions. In retrospect, I overcomplicated earlier attempts by creating new slices for every window—using an integer variable to track the sum inline is way more efficient.`,
        ]}
      />
    </div>
  ),
};

export default post;
