const goSolution = `func minMaxGame(nums[]int) int {
  n:= len(nums)

  if n == 1 {
    return nums[0]
  }

  var newNums []int

  for i := 0; i < n / 2; i++ {
    if i % 2 == 0 {
      newNums = append(newNums, min(nums[2 * i], nums[2 * i + 1]))
    } else {
      newNums = append(newNums, max(nums[2 * i], nums[2 * i + 1]))
    }
  }

  return minMaxGame(newNums)
}

func min(num1, num2 int) int {
  if (num1 <= num2) {
    return num1
  }

  return num2
}

func max(num1, num2 int) int {
  if (num1 >= num2) {
    return num1
  }

  return num2
}
`;

const post = {
  num: 2293,
  tags: [`array`, `simulation`],
  code: [goSolution],
  date: `2025-05-28T12:00:00Z`,
  difficulty: `easy`,
  languages: [`Go`],
  children: (
    <p>
      Fairly straight forward because the directions give you the parameters.
      Basically you keep on trimming the array until you reach [num].
    </p>
  ),
};

export default post;
