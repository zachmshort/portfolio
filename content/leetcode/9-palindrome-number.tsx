const post = {
  title: "Palindrome Number",
  date: "2025-04-28T00:00:00Z",
  tags: ["math"],
  languages: ["Go"],
  code: `func isPalindrome(x int) bool {
    if x < 0 || (x != 0 && x % 10 == 0) {
        return false
    }

    originalNum := x
    reversedNum := 0

    for originalNum > 0 {
        digit := originalNum % 10
        reversedNum = reversedNum*10 + digit
        originalNum /= 10
    }

    return x == reversedNum
}
`,
  children: <p></p>,
};

export default post;
