const goSolution = `func differenceOfSums(n int, m int) int {
  res:= 0
  for i := 1; i <= n; i++ {
    if i % m != 0 {
      res += i
    } else {
      res -= i
    }
  }

  return res
}
`;

const post = {
  num: 2894,
  date: "2025-05-27T00:00:00Z",
  tags: ["math"],
  code: [goSolution],
  languages: ["Go"],
  children: <p></p>,
};

export default post;
