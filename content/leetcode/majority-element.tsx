const goSolution = `func majorityElement(nums []int) int {
    hashMap := make(map[int]int)
   for _,num := range nums {
        hashMap[num]++
        if hashMap[num] > len(nums)/2 {
            return num
        }
   } 
   return 0
}
`;

const post = {
  num: 169,
  date: "2025-03-03T00:00:00Z",
  tags: ["array", "hash table", "sorting", "counting", "divide and conquer"],
  code: [goSolution],
  languages: ["Go"],
  children: <p></p>,
};

export default post;
