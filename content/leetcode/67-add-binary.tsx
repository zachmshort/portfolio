const goSolution = `func addBinary(a string, b string) string {
  num1:= new (big.Int)
  num2:= new (big.Int)
  num1.SetString(a, 2)
  num2.SetString(b, 2)

  sum:= new (big.Int).Add(num1, num2)

  return sum.Text(2)
}`;

const post = {
  title: "Add Binary",
  date: "2025-01-29T00:00:00Z",
  tags: ["math", "string", "bit manipulation", "simulation"],
  code: [goSolution],
  languages: ["Go"],
  children: <p></p>,
};

export default post;
