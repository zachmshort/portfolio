const post = {
  title: "Missing Number",
  date: "2025-05-22T00:00:00Z",
  tags: [
    "array",
    "hash table",
    "math",
    "binary search",
    "bit manipulation",
    "sorting",
  ],
  code: [
    `func missingNumber(nums []int) int {
  sort.Ints(nums)

  for i,num := range nums {
    if i != num {
        return i
    }
  }
  return len(nums)
}
`,
  ],
  languages: ["Go"],
  children: (
    <p>
      I used sort.Ints(nums) to avoid implementing mergesort from scratch,
      yeah... kind of a cheat, but I wanted to focus on the logic instead. Once
      the array is sorted, my idea was simple: as I iterate through the array,
      each number should match its index. If it doesn't, that's the missing
      number. This approach passed 2 out of the 3 initial test cases, but it
      failed on the [0, 1] case, which should return 2. That’s when I realized
      if you make it through the entire array without finding a mismatch, then
      the missing number has to be n—the length of the array. So the final
      return case should be len(nums).
    </p>
  ),
};

export default post;
