import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func groupAnagrams(strs []string) [][]string {
  res := [][]string{{strs[0]}}
  if len(strs) == 1 {
    return res
  }

  for i := 1; i < len(strs); i++ {
    placed := false
    for j := 0; j < len(res); j++ {
      if isAnagram(strs[i], res[j][0]) {
        placed = true
        res[j] = append(res[j], strs[i])
        break
      }
    }
    if !placed {
      res = append(res, []string{strs[i]})
    }
  }

  return res
}

func isAnagram(a, b string) bool {
  if len(a) != len(b) {
    return false
  }

  m := make(map[rune]int)
  for _, l := range a {
    m[l]++
  }
  for _, l := range b {
    m[l]--
    if m[l] < 0 {
      return false
    }
  }

  return true
}
`;

const post = {
  num: 49,
  date: `2025-05-30T12:00:00Z`,
  tags: ["hash table", "string", "sorting", "array"],
  difficulty: `medium`,
  languages: [`Go`],
  complexity: {
    time: `O(n^2 * k)`,
    space: `O(n * k)`,
    timeExplanation: `Check every pair of strings in the worst case, and isAnagram takes O(k) time per comparison.`,
    spaceExplanation: `Store the groups and use a map for character counting, which takes up O(n * k) space.`,
  },
  performance: { time: 5, memory: 46 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Group all anagrams from a slice of strings. An anagram is formed by rearranging the letters of a word.`,
        ]}
      />

      <Approach
        items={[
          `Use a helper function to check if two strings are anagrams.`,
          `Iterate through the list of words, placing each into an existing group if it matches the first word in that group.`,
          `If no group matches, start a new one.`,
          `Not the most efficient approach, but it gets the job done.`,
        ]}
      />

      <EdgeCases
        items={[`["a", "b", "c", "a"] → duplicates must be grouped together.`]}
      />

      <Reflections
        items={[
          `This brute force solution works for small inputs but doesn't scale, but I am happy that I've gone from no mediums to a few in just the last couple days. Soon my easy solutions will be fully polished, my mediums will improve, and I'll start working on hards. :)`,
        ]}
      />
    </div>
  ),
};

export default post;
