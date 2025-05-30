const goSolution = `func addDigits(num int) int {
  if num < 10 {
    return num
  }

  newNum := 0
  for num > 0 {
    newNum += num % 10
    num /= 10
  }

  return addDigits(newNum)
}
`;

const post = {
  num: 258,
  tags: [`math`, `simulation`, `number theory`],
  code: [goSolution],
  date: `2025-05-28T12:00:00Z`,
  difficulty: `easy`,
  languages: [`Go`],
  timeComplexity: [`O(log n)`],
  spaceComplexity: [`O(log n)`],
  timeBeats: [`100%`],
  spaceBeats: [`99.57%`],
  children: (
    <div className="prose prose-lg indent-8">
      <p>
        This problem is an example of recursive digit manipulation. The task is
        to repeatedly sum the digits of a number until only one digit remains.
        The base case checks whether the number is already a single digit. If
        so, it’s returned immediately. Otherwise, the function breaks the number
        into digits using modulo and division, sums them, and calls itself
        recursively with the result. Recursion here is elegant and performant
        due to the problem’s inherently logarithmic reduction, each step roughly
        cuts the number’s magnitude by an order.
      </p>
    </div>
  ),
};

export default post;
