const post = {
  title: "Two Sum",
  date: "2024-09-26T12:00:00Z",
  tags: ["array", "hashmap"],
  languages: ["Go"],
  code: `func twoSum(nums []int, target int) []int {
	hashMap := make(map[int]int)

	for i, num := range nums {
		difference := target - num

		if targetIdx, found := hashMap[difference]; found {
			return []int{targetIdx, i}
		} else {
            hashMap[num] = i
        }
	}

    return []int{-1,-1}
}
`,
  children: (
    <p>
      This is one of the most common intro questions to test problem solving and
      hashmap use.
    </p>
  ),
};

export default post;
