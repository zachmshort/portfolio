import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func moveZeroes(nums []int)  {
    for i := range(nums) {
        if nums[i] == 0 {
            j := i
            for nums[j] == 0 && j < len(nums) - 1 {
                j++
            }
            nums[i], nums[j] = nums[j], nums[i]
        }
    }
}
`;
const post = {
  num: 283,
  date: `2025-05-30T12:00:00Z`,
  tags: ["array", "two pointers", "in-place"],
  difficulty: `easy`,
  languages: ["Go"],
  complexity: {
    time: "O(n²)",
    space: "O(1)",
    timeExplanation: `Double nested for loop.`,
  },
  performance: { time: 19, memory: 97 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given an integer array nums, move all 0's to the end while maintaining the relative order of the non-zero elements.`,
          `Must be done in-place without making a copy.`,
        ]}
      />

      <Approach
        items={[
          `Loop through the array. When you find a zero, send out a second pointer to hunt for the next non-zero value.`,
          `Once a non-zero is found, swap it with the zero.`,
          `Keep going until you're done. The loop moves forward whether you're swapping or not.`,
        ]}
      />

      <EdgeCases
        items={[
          `[0, 0, 0] → stays the same.`,
          `[1, 2, 3] → nothing changes.`,
          `[0, 1, 0, 2] → becomes [1, 2, 0, 0].`,
        ]}
      />

      <Reflections
        items={[
          `Time performance came in around the 19th percentile, which is really back. Too many nested scans. Memory was solid, 97th percentile not that it matters much. It did the job but had no hustle. In future solutions, I’ll switch to the cleaner two-pointer method that moves non-zeros forward directly and leaves zeros behind.`,
        ]}
      />
    </div>
  ),
};
export default post;
