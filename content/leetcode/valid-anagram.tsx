import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func isAnagram(s string, t string) bool {
  if len(s) != len(t) {
    return false
  }

  m := make(map[rune]int)
  for _, letter := range s {
    m[letter]++
  }

  for _, letter := range t {
    m[letter]--
    if m[letter] < 0 {
      return false
    }
  }

  return true
}
`;

const post = {
  num: 242,
  date: `2025-05-29T12:00:00Z`,
  tags: ["hashmap", "string"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(1)`,
    timeExplanation: `Each character is processed a constant number of times, so total time is linear in the length of the input.`,
    spaceExplanation: `At most 26 characters for lowercase input → constant space usage.`,
  },
  performance: { time: 77, memory: 63 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `
          Given two strings, determine if they are anagrams of each other.
          You can assume the strings contain only lowercase English letters.
          An anagram is a rearrangement of letters — "anagram" and "nagaram" are anagrams.
          `,
        ]}
      />

      <Approach
        items={[
          `Use a hash map to count the frequency of each character in the first string.
          Then iterate through the second string and subtract counts.
          If at any point a count drops below zero, it's not a valid anagram.
          `,
        ]}
      />
      <EdgeCases
        items={[
          `"a" vs "ab" → false `,
          `"rat" vs "car" → false `,
          `"" vs "" → true`,
        ]}
      />

      <Reflections
        items={[
          `Go doesn't have a built-in counter or defaultdict like Python, so I had to roll my own hash map. Not a big deal, but worth noting. Felt like a pretty clean solution overall.`,
        ]}
      />
    </div>
  ),
};

export default post;
