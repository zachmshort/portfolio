import { Problem, Reflections } from "@/components/slug-helpers";

const goSolution = `func mySqrt(x int) int {
  left, right := 1, x

  for left <= right {
    mid:= left + ((right - left) / 2)

        mid2:= mid * mid

        if mid2 < x {
      left = mid + 1
    } else if mid2 > x {
      right = mid - 1
    } else {
    return mid
  }
}

return right
}
`;

const post = {
  num: 69,
  title: "Sqrt(x)",
  date: `2025-05-31T12:00:00Z`,
  tags: ["math", "binary search"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(log n)`,
    space: `O(log n)`,
  },
  performance: { time: 100, memory: 85 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
`,
        ]}
      />
      <Reflections
        items={[`The binary search topic tag kind of gave it away.`]}
      />
    </div>
  ),
};

export default post;
