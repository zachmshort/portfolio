import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func maximumCount(nums []int) int {
    target := 0

    l, r := 0, len(nums) - 1
    for l <= r {
        mid := l + (r - l) / 2

        if nums[mid] == target {
            negativeNumCount := getZerosBack(mid, nums)
            startOfPositive := getZeros(mid, nums)
            positiveNumCount := len(nums) - 1 - startOfPositive
           
            return max(positiveNumCount, negativeNumCount)
        } else if nums[mid] < target {
            l = mid + 1
        } else if nums[mid] > target {
            r = mid - 1       
        }
    }

    neg := l
    pos := len(nums) - neg
    

    return max(pos, neg)
}

func getZeros(count int, nums []int) int {
    if count == len(nums) - 1 {
        return count
    }

    if nums[count+1] != 0 {
        return count
    }

    return getZeros(count+1,nums)
}

func getZerosBack(count int, nums []int) int {
    if count == 0 {
        return count
    }

    if nums[count-1] != 0 {
        return count
    }

    return getZerosBack(count-1,nums)
}

func max(a, b int) int {
    if a > b {
        return a
    }

    return b
}

`;

const post = {
  num: 2529,
  date: `2025-06-01T12:00:00Z`,
  tags: ["binary search"],
  difficulty: `easy`,
  languages: [`Go`],

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
`,
        ]}
      />

      <Approach
        items={[
          `Binary search until I found a zero`,
          `Do a search backwards and forwards recursively until I found the first and last zero`,
          `This gives a range of where the zeros are`,
          `Negative numbers end at the first zero index. So the number of zeros = index of first zero`,
          `Positive numbers run from the last index in the array to the last index of zero. Hence the formula `,
          `positiveCount = len(nums) - 1 - indexOfLastZero`,
        ]}
      />
      <EdgeCases
        items={[
          `All zeros, return 0`,
          `All positive numbers`,
          `All negative numbers`,
        ]}
      />

      <Reflections
        items={[
          `I may have slightly over engineered this problem. Got carried away when I saw can you do it in O(log n). Ironically my solution is O(n) if the array is all zeros, otherwise it is O(log n).`,
        ]}
      />
    </div>
  ),
};

export default post;
