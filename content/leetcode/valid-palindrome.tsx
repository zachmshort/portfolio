const goSolution = `import "strings"

func isPalindrome(s string) bool {
  s = formatString(s)
  fmt.Print(s)
  left, right := 0, len(s) - 1
  for left <= right {
    leftLetter, rightLetter:= s[left], s[right]

        if leftLetter != rightLetter  {
      return false
    }

        left++
  right--
}

return true
}

func formatString(s string) string {
  s = strings.ToLower(s)
  s = strings.TrimSpace(s)

  res:= ""
  for _, letter := range s {

    if (letter >= 'a' && letter <= 'z') || (letter >= '0' && letter <= '9') {
      res += string(letter)
    }
  }

  return res
};
`;

import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const post = {
  num: 125,
  date: `2025-05-30T12:00:00Z`,
  tags: ["string", "two pointer"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    timeExplanation: `O(n)`,
    spaceExplanation: `O(n)`,
  },
  performance: { time: 10, memory: 10 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given a string s, return true if it is a palindrome, or false otherwise.`,
        ]}
      />
      <Approach
        items={[
          `Clean up the string by converting to lower case then removing whitespace/checking the rune values.`,
          `Compare the left and right side moving inward with two pointers`,
        ]}
      />
      <EdgeCases items={[" ' ' -> true"]} />

      <Reflections
        items={[
          `This was a horrendous approach. I need to study up on runes, ASCII, and strings mutation.`,
        ]}
      />
    </div>
  ),
};

export default post;
