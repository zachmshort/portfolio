import { CodeSnippet } from "@/components/slug-helpers";

const goSolution = `func findMaxConsecutiveOnes(nums[]int) int {
  highestCount, count := 0, 0

  for _, num := range nums {
    if num == 1 {
      count++
      continue
    }
    if count > highestCount {
      highestCount = count
    }
    count = 0
  }

  return max(count, highestCount)
}

func max(a, b int) int  {
  if a > b {
    return a
  }
  return b
}
`;

const goSnippet = `func findMaxConsecutiveOnes(nums []int) int {
    a := []int{0}
    for _, num := range nums {
        if num == 1 {
            a[len(a) - 1] = a[len(a)-1]+ 1
        } else {
            a = append(a,0)
        }
    }

    return max(a)
}

func max(a []int) int {
    maxNum := a[0]
    for _, num := range a {
        if num > maxNum {
            maxNum = num
        }
    }
    return maxNum
}
`;

const post = {
  num: 485,
  tags: [`array`],
  code: [goSolution],
  date: `2025-05-28T12:00:00Z`,
  difficulty: `easy`,
  languages: [`Go`],
  children: (
    <>
      <p>
        Originally I had a slightly different approach to solving this problem,
        my immediate instinct upon reading the problem was a hashMap. However I
        quickly realized this would not be applicable because its not about how
        many ones there are in total, its about how many are there without any
        0's breaking them up. Thus, my brain jumped from a hashMap to a hashMap
        without a key, i.e. an array. My plan was to end up with an array of
        every instance of consecutive 1's, and then find the max of this array.
      </p>
      <CodeSnippet code={goSnippet} />
      <p>
        So when I hit a 1, I increment the last number by 1. When I hit a 0, I
        append a new 0 to the end because the previous count has been nullified.
        Then I just iterate through the array to find the largest number. After
        submitting this solution and getting it right, I knew something was
        missing. I thought there had to be a better way than creating a
        potentially O(n) loop after iterating over the entire array.
      </p>
      <p>
        Then I remembered a problem we did in our Software Development class
        just the day prior. The problem asked, what is the best performance of a
        function that finds the kth largest value in an n sized array. My
        approach was ultimately O(n*k). However, there is a much simplier,
        consistent, and generally more optimized approach. Create a k sized
        array, and then for each new value you compare, if its larger than the
        smallest value in the array, then replace it. In the end, the last value
        of this array will be the kth largest.
      </p>
      <p>
        Similarly, since I only need one value (the highest number of
        consecutive ones), I created two counters, one that tracks the highest
        recorded count overall. And another that increments with consecutive
        ones and then resets when a 0 is found. In the end this solution is much
        simplier for both performance and space complexity.
      </p>
    </>
  ),
};

export default post;
