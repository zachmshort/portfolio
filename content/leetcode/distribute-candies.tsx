import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func distributeCandies(candyType []int) int {
    n := len(candyType) / 2
    m := make(map[int]bool)
    for _, num := range candyType {
        m[num] = true
        if len(m) >= n {
            return n
        }
    }

    return min(len(m), n)
}

func min(a,b int) int {
    if a < b {
        return a
    }
    return b
}

`;

const post = {
  num: 0,
  date: `2025-06-04T12:00:00Z`,
  tags: ["array", "hash table"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
  },
  performance: { time: 80, memory: 75 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
`,
        ]}
      />
    </div>
  ),
};

export default post;
