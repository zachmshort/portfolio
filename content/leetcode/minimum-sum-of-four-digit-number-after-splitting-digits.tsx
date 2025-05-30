import {
  Approach,
  Complexity,
  EdgeCases,
  Performance,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func minimumSum(num int) int {
	var arr []int
	for num > 0 {
		arr = append(arr, num%10)
		num /= 10
	}

    low1, arr := minValAndMaxArr(arr)
    low2, arr := minValAndMaxArr(arr)
	return low1 * 10 + low2 * 10 + arr[0] + arr[1]
}

func minValAndMaxArr(arr []int) (int, []int) {
    min := arr[0]
    idx := 0

    for i := 1; i < len(arr); i++ {
        if arr[i] < min {
            min = arr[i]
            idx = i
        }
    }

    arr = append(arr[:idx], arr[idx+1:]...)
    return  min, arr
}`;

const post = {
  num: 2160,
  date: `2025-05-28T12:00:00Z`,
  tags: [`greedy`, `sorting`, `math`],
  difficulty: `easy`,
  languages: [`Go`],
  code: [goSolution],

  children: (
    <div>
      <h2 className={`text-2xl py-3`}>Problem</h2>
      <p className={`indent-6`}>
        You're given a four-digit positive integer. You need to split those
        digits into two new numbers using every digit exactly once. Leading
        zeroes are allowed. Return the <strong>minimum possible sum</strong> of
        the two new numbers.
      </p>

      <Approach
        items={[
          `Take the two smallest digits and put them in the tens place of each number.Then take the two remaining digits and put them in the ones place.That minimizes the weighted contribution of the largest digits.`,
          `It's not the "cleanest" solution possible, but it was a good exercise in building and destructively slicing an array.`,
        ]}
      />
      <Complexity
        time="O(1)"
        space="O(1)"
        timeExplanation="Constant time since input is fixed at 4 digits."
        spaceExplanation="A slice of 4 ints and a few vars."
      />
      <Performance time={100.0} memory={23.08} />

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
