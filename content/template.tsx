import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = ``;

const post = {
  num: 0,
  date: `2025-05-29T12:00:00Z`,
  tags: [],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O()`,
    space: `O()`,
    timeExplanation: ``,
    spaceExplanation: ``,
  },
  performance: { time: 100, memory: 100 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `
        You're given a four-digit positive integer. You need to split those
        digits into two new numbers using every digit exactly once. Leading
        zeroes are allowed. Return the <strong>minimum possible sum</strong> of
        the two new numbers.
`,
        ]}
      />

      <Approach
        items={[
          `Take the two smallest digits and put them in the tens place of each number.Then take the two remaining digits and put them in the ones place.That minimizes the weighted contribution of the largest digits.`,
          `It's not the "cleanest" solution possible, but it was a good exercise in building and destructively slicing an array.`,
        ]}
      />
      <EdgeCases
        items={[
          `4009 → zeros are allowed in the front, so result is 4 + 9 = 13`,
          `1111 → all digits same → 11 + 11 = 22`,
        ]}
      />

      <Reflections
        items={[
          `With only four digits, it’s easy to spot the greedy pattern: pair the smallest digits into tens places.`,
          `In hindsight, I'd probably just use a slice of fixed length and sort it next time, much simpler and more readable.`,
        ]}
      />
    </div>
  ),
};

export default post;
