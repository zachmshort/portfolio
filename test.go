package portfolio

import "sort"

func threeSum(nums []int) [][]int {
	var res [][]int
	sort.Ints(nums)

	for i := 0; i < len(nums); i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		target := -nums[i]
		l, r := 0, len(nums)-1

		for l < r {
			sum := nums[l] + nums[r]
			if sum == target {
				res = append(res, []int{nums[i], nums[r], nums[l]})
				for l < r {
					l++
				}

				for l < r {
					r++
				}

				l++
				r--
			} else if sum < target {
				l++
			} else {
				r++
			}
		}
	}
	return res
}
