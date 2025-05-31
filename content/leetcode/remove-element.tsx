import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `
func removeElement(nums []int, val int) int {
  counter := 0
  for i := 0; i <= len(nums)-1-counter; i++ {
    for nums[i] == val && i <= len(nums)-1-counter {
      if i != len(nums)-1-counter {
        nums[i], nums[len(nums)-1-counter] = nums[len(nums)-1-counter], nums[i]
      }
      counter++
    }
  }
  return len(nums) - counter
}
`;

const post = {
  num: 27,
  date: "2025-05-31T12:00:00Z",
  tags: ["two-pointer", "array"],
  difficulty: "easy",
  languages: ["Go"],
  complexity: {
    time: "O(n)",
    space: "O(1)",
    timeExplanation:
      "Potentially visit every element once, even if some are swapped.",
    spaceExplanation:
      "Do everything in-place with a few counters — no extra memory needed.",
  },
  performance: { time: 100, memory: 20 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          "Given an integer array nums and an integer val, remove all occurrences of val in-place. Return the number of remaining elements, and make sure the first k elements of nums (where k is the return value) are the elements not equal to val. Order doesn't matter and leftover values after k don't matter either.",
        ]}
      />

      <Approach
        items={[
          "Track how many values removed with a counter",
          "Loop through the array. When you hit a value equal to val, swap it with the element from the back.",
          "Keep shrinking the end of the array like insertion sort where you know which values are already sorted.",
          "Don't increment the main index if you just swapped, you need to re-check the new value at that spot.",
        ]}
      />

      <EdgeCases
        items={[
          "All elements are val → return 0.",
          "No elements are val → return len(nums).",
          "Multiple vals at the end or beginning, swap logic still works.",
        ]}
      />

      <Reflections
        items={[
          "It’s basically compacting the valid elements to the front. This problem really made me think about when NOT to increment an index. Very tricky problem and the top solution made me realize I was dramatically overthinking it and coming from the wrong angle. The best solutions utilzed val != nums[i] where as I used a proper two pointer solution as long as val == nums[i].",
        ]}
      />
    </div>
  ),
};

export default post;
