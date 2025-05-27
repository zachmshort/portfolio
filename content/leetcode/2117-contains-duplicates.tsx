const goSolution = `func containsDuplicate(nums []int) bool {
    hashMap := make(map[int]bool)

    for _,num := range nums {
        if _, exists := hashMap[num]; exists {
            return true
        }
        hashMap[num] = true
    }
    return false
}
`;

const post = {
  title: "Contains Duplicate",
  date: "2025-03-03T00:00:00Z",
  tags: ["array", "hash table", "sorting"],
  code: [goSolution],
  languages: ["Go"],
  children: (
    <p>
      Fairly straight forward, I am getting the hang of the pattern behind
      simple hashmap.
    </p>
  ),
};

export default post;
