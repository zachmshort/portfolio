import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func removeDuplicates(nums[]int) int {
  hashMap:= make(map[int]bool)
  count:= 0
  for _, num := range nums {
    if _, exists := hashMap[num]; !exists {
      hashMap[num] = true
      nums[count] = num
      count++
    }
  }
  return count
}
`;

const post = {
  num: 26,
  date: `2025-03-03T12:00:00Z`,
  tags: ["array", "two pointer"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
  },
  performance: { time: 100, memory: 5.75 },
  code: [goSolution],
  children: (
    <div>
      <Problem
        items={[
          `Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.`,
        ]}
      />
    </div>
  ),
};

export default post;
