import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
  Title,
} from "@/components/slug-helpers";
import image from "@/public/leetcode/images/powx-n.png";
import image2 from "@/public/leetcode/images/powx-n2.png";
import Image from "next/image";

const goSolution = `func myPow(x float64, n int) float64 {
    if n <= 1 {
        return baseCase(x,n)
    }

    if isEven(n) {
        return myPow(x*x, n / 2)
    }
    
    return myPow(x*x, n / 2) * x
}

func isEven(n int) bool {
    return n % 2 == 0 
}

func baseCase(x float64, n int) float64 {
    if n < 0 {
        return myPow(1/x, n * -1)
    }

    if n == 0 {
        return 1
    }

    return x
}`;

const post = {
  num: 50,
  title: "Pow(x, n)",
  date: `2025-05-31T12:00:00Z`,
  tags: ["math", "recursion"],
  difficulty: `medium`,
  languages: [`Go`],
  complexity: {
    time: `O(log n)`,
    space: `O(log n)`,
  },
  performance: { time: 100, memory: 80.48 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Implement pow(x, n), which calculates x raised to the power n (i.e., xⁿ).`,
        ]}
      />

      <Approach
        items={[
          `Base Case: x ∈ S`,
          `Recursive Case: if x ∈ S, x*n ∈ S`,
          `JUST KIDDING`,
        ]}
      />
      <Title title="My Saving Grace" />
      <div>
        By some miracle, my Algorithms Professor happended to be covering this
        exact formula in class just a few days ago. And I remembered it enough
        to grind through the problem.
      </div>
      <div className={`flex flex-col items-center justify-center gap-y-4 mt-4`}>
        <div className="relative w-full">
          <Image src={image} alt="Exponentiation" width={800} />
        </div>

        <div className="relative w-full">
          <Image src={image2} alt="Exponentiation" width={800} />
        </div>
      </div>

      <EdgeCases
        items={[`If n is negative, convert it to (1/x)ⁿ `, `Ex: 2⁻² == (1/2)²`]}
      />

      <Reflections
        items={[
          `I would have absolutely tried to brute force it with a recurrence relation had I not seen the exact formula just a couple days before.`,
        ]}
      />
    </div>
  ),
};

export default post;
