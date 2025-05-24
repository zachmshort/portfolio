const post = {
  title: "Single Number",
  date: "2025-05-23T00:00:00Z",
  tags: ["array", "bit manipulation", "easy"],
  code: [
    `func singleNumber(nums []int) int {
    hashMap := make(map[int]int)

    for _,num := range nums {
        hashMap[num]++
    }

    for _,num := range nums {
        if hashMap[num] == 1 {
            return num
        }
    }

    return -1
}
`,
  ],
  languages: ["Go"],
  children: (
    <p>
      Very simple O(n) solution, since I am repeatedly doing hashMap problems
      the pattern is becoming clear. However I have no doubt there is a better
      aproach since one of the tags is bit manipulation. But my main goal is
      completing many different types of problems for the time being.
    </p>
  ),
};

export default post;
