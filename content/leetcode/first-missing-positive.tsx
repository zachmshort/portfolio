import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func firstMissingPositive(nums []int) int {
	for i := 0; i < len(nums); i++ {
		for 1 <= nums[i] && nums[i] <= len(nums) && nums[i] != i+1 && nums[nums[i]-1] != nums[i] {
			nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]
		}
	}

	for i, num := range nums {
		if num != i+1 {
			return i + 1
		}
	}

	return len(nums) + 1
}

`;

const post = {
  num: 41,
  date: `2025-05-31T12:00:00Z`,
  tags: ["array"],
  difficulty: `hard`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(1)`,
  },
  performance: { time: 100, memory: 80 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Find the smallest missing positive integer from an unsorted integer array.`,
          `Must run in O(n) time and use constant extra space — no sorting, no hash sets allowed.`,
          `Input can have negatives, zeros, duplicates, and large numbers.`,
        ]}
      />

      <Approach
        items={[
          `Treat the array as a hash map by swapping numbers into their correct positions (num i at index i-1) in-place.`,
          `Ignore numbers <= 0 or > n (array length), since they can't be the smallest missing positive.`,
          `Iterate and swap until each number in range is in its correct spot index or duplicates block further swaps.`,
          `Make a second pass to find the first index where index + 1 != value, that index + 1 is the answer.`,
          `If all are in place, answer is n + 1.`,
        ]}
      />
      <Reflections
        items={[
          `This problem was my first hard and honestly easier than some of the easy's. Also the reminder that O(n) = O(2n) was a massive hint.`,
        ]}
      />
    </div>
  ),
};

export default post;
