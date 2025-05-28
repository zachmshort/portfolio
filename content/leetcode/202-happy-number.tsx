import ProblemLink from "@/app/blog/components/problem-link";
import { CodeSnippet } from "@/components/code-snippet";

const goSolution = `func isHappy(n int) bool {
	seenNumbers := make(map[int]bool)

	for {
		if n == 1 {
			return true
		}
		if seenNumbers[n] {
			return false
		}
        seenNumbers[n] = true
		n = getSum(n)
	}
}

func getSum(n int) int {
	a := 0
	for n > 0 {
		digit := n % 10 
		n /= 10
		a += digit*digit
	}

    return a
}
`;

const goSnippet = `func getSum(n int) int {
	a := 0
	for n > 0 {
		digit := n % 10 
		n /= 10
		a += digit*digit
	}

    return a
}
`;

const goSnippet2 = `if seenNumbers[n] {
			return false
		}
        seenNumbers[n] = true

`;

const post = {
  title: `Happy Number`,
  tags: [`hash table`, `math`, `two pointers`],
  code: [goSolution],
  date: `2025-05-28T12:00:00Z`,
  difficulty: `easy`,
  languages: [`Go`],
  children: (
    <>
      <p>
        In reviewing the problem directions before I attempt it, I am honestly a
        bit confused as to why it says there is a two pointer approach. Given my
        interpretation, I think that the easiest implementation would be a
        recursive solution with just math and a table. I am once again reminded
        of <ProblemLink name="9-palindrome-number" />. My plan is to take each
        digit and square it using modulo and div, and then recursively calling
        isHappy() we reach 1. This helper function gets the digits from n.
      </p>
      <CodeSnippet code={goSnippet} />
      <p>
        And each time before getting the new digits, the current n is added to a
        hashmap. This way, if a number is seen a second time, its evidence that
        there is an infinite loop afoot. Hence the following section.
      </p>
      <CodeSnippet code={goSnippet2} />
    </>
  ),
};

export default post;
