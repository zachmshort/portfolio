import { Problem } from "@/components/slug-helpers";

const goSolution = `func strStr(haystack string, needle string) int {
  i:= 0
  for len(needle) <= len(haystack) - i {
    if needle == haystack[i: i+ len(needle)] {
      return i
    }
    i++
  }
  return -1  
}

`;

const post = {
  num: 28,
  date: `2025-01-30T12:00:00Z`,
  tags: ["strings"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
  },
  performance: { time: 100, memory: 50 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.`,
        ]}
      />
    </div>
  ),
};

export default post;
