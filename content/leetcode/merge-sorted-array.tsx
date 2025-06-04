import { Approach, Problem, Reflections } from "@/components/slug-helpers";

const goSolution = `func merge(nums1 []int, m int, nums2 []int, n int)  {
    nums := nums1 
    for _, num := range nums2 {
        nums[m] = num
        m++
    }
    sort.Ints(nums)
    nums1 = nums
}

`;

const post = {
  num: 88,
  date: `2025-06-03T12:00:00Z`,
  tags: ["array", "two pointer", "sorting"],
  difficulty: `easy`,
  languages: [`Go`],

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Merge nums1 and nums2 into a single array sorted in non-decreasing order.
`,
        ]}
      />

      <Approach items={[`Append the two arrays together`, `Sort`]} />

      <Reflections
        items={[`Cheated just so I could do a leetcode today. Will redo later`]}
      />
    </div>
  ),
};

export default post;
