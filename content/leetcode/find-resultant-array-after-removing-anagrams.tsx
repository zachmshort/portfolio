import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func removeAnagrams(words []string) []string {
    res := []string{words[0]}
    for _, word := range words {
        if !isAnagram(word, res[len(res) - 1]) {
            res = append(res, word)
        }
    }    

    return res
}

func isAnagram(a,b string) bool {
    if len(a) != len(b) {
        return false 
    }

    m := make(map[rune]int)
    for _,l := range a {
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
  num: 2273,
  date: `2025-05-30T12:00:00Z`,
  tags: ["array", "hash table", "string"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n * k)`,
    space: `O(k)`,
    timeExplanation: `Loop through each word, and for each, we perform a frequency map comparison (O(k) time, k is the max word length).`,
    spaceExplanation: `Each word comparison uses a hash map of size at most O(k) for the 26 lowercase letters.`,
  },
  performance: { time: 100, memory: 72.22 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.
`,
          `Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.`,
        ]}
      />

      <Approach
        items={[
          `Start with the first word in the result list`,
          `Iterate over the input and compare each word to the last word added to the result`,
          `If it is not an anagram, append it. If it is, skip it.`,
          `The anagram check is done via character frequency mapping using a hash map.`,
        ]}
      />

      <Reflections
        items={[
          `This one was easier than I expected, the few number of likes and comments on it made me a bit scared at first. But it's just filtering while comparing to the last accepted word. Honestly, you could also do this with sorting if you wanted to be lazy, sort both strings and compare them.`,
        ]}
      />
    </div>
  ),
};

export default post;
