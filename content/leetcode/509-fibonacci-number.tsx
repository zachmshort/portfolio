import { CodeSnippet } from "@/components/code-snippet";
import Link from "next/link";

const recursiveFib = `func fib(n int) int {
    if n <= 1 {
        return n
    }

    if n <= 4 {
        return n - 1
    }

    return fib(n-1) + fib(n-2)
}
`;

const post = {
  title: "Fibonacci Number",
  date: "2025-05-23T00:00:00Z",
  tags: ["math", "dynamic programming", "recursion", "memoization", "easy"],
  code: [
    `func fib(n int) int {
  if n <= 1 {
    return n
  }

  if n <= 4 {
    return n - 1
  }

  a, b := 2, 3
  for i := 5; i <= n; i++ {
    a, b = b, a + b
  }
  return b
}

`,
  ],
  languages: ["Go"],
  children: (
    <>
      <p>Although there is obviously the recursive version: </p>
      <CodeSnippet code={recursiveFib} />
      <p>
        I prefer the dynamic programming approach because it consumes far less
        memory by doing far less calculations. My first step was that I listed
        out the first 6 values of fib(n).
        <p className={`mt-4`}>f(0) = 0</p>
        <p>f(1) = 1</p>
        <p>f(2) = 1</p>
        <p>f(3) = 2</p>
        <p>f(4) = 3</p>
        <p>f(5) = 5</p>
        <p className={`mb-4`}>f(6) = 8</p>At this point I noticed a pattern for
        atleast the first 4 values. If the value was less than or equal to 1,
        return n obviously, and up to n = 5, I could return n - 1.
        <CodeSnippet
          code={`if n <= n-1 {
  return n
}

if n <= 4 {
  return n - 1
}
`}
        />
        I did this problem following{" "}
        <Link
          href="/blog/leetcode/70-climbing-stairs"
          className={`text-blue-500`}
        >
          Climbing Stairs (70)
        </Link>
        , which involves a very similar approach. So the pattern of adding up to
        the final value rather than breaking down in recursively was very
        straight forward. I initialized the index at 5, because thats the lowest
        value not covered by the base case. And then I thought about what value
        a and b would need to be if i := 5, which would be 2 + 3, (i.e. fib(3) &
        fib(4)).
      </p>
    </>
  ),
};

export default post;
