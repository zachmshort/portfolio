const goSolution = `func containsDuplicate(nums []int) bool {
    m := make(map[int]bool)

    for _, num := range nums {
        if _,k := m[num]; k {
            return true
        }

        m[num] = true
    }
    return false
}
`;

const post = {
  num: 2117,
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
