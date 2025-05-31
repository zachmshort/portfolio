import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func thirdMax(nums []int) int {
	if len(nums) <= 2 {
        sort.Ints(nums)
        return nums[len(nums) - 1]
    }

	res := getFirstThree(nums)
    if len(res) < 3 {
        return res[len(res) - 1]
    }

	for i := 3; i < len(nums); i++ {
		if nums[i] > res[0] {
			res = insert(res, nums[i])
		}
	}

	return res[0]
}

func getFirstThree(nums []int) []int {
	i := 0
	m := make(map[int]bool)

	for len(m) < 3 && i < len(nums) {
		m[nums[i]] = true
		i++
	}

	var res []int
	for val, _ := range m {
		res = append(res, val)
	}
    sort.Ints(res)

	return res
}


func insert(nums []int, val int) []int {
    if val == nums[0] || val == nums[1] || val == nums[2] {
        return nums
    }

    nums = append(nums, val)
    sort.Ints(nums)
	return nums[1:]
}

`;

const post = {
  num: 414,
  date: `2025-05-31T12:00:00Z`,
  tags: ["array", "sorting"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
  },
  performance: { time: 100, memory: 68.14 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
`,
        ]}
      />
    </div>
  ),
};

export default post;
