import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func threeSum(nums []int) [][]int {
	var res [][]int
	tripletSets := make(map[string]bool)
	sort.Ints(nums)
	set := toSet(nums)
	for num := range set {
		if num == 0 && len(set) == 1 && len(nums) >= 3 {
			res = append(res, []int{num, num, num})
			return res
		}
		break
	}

	hash := make(map[int][]int)
	for i, num := range nums {
		hash[num] = append(hash[num], i)
	}

	for i, num1 := range nums {
		for j := i + 1; j < len(nums); j++ {
			num2 := nums[j]

			target := -1 * (num1 + num2)
			if indexes, ok := hash[target]; ok {
				idx := findCorrectIndex(i, j, indexes)
				if idx == -1 {
					continue
				}
				arr := []int{num1, num2, nums[idx]}
				sort.Ints(arr)
				key := fmt.Sprintf("%d%d%d", arr[0], arr[1], arr[2])

				if _, seen := tripletSets[key]; !seen {
					tripletSets[key] = true
					res = append(res, arr)
				}
			}
		}
	}

	return res
}

func findCorrectIndex(i, j int, indexes []int) int {
	for _, k := range indexes {
		if i != j && i != k && j != k {
			return k
		}
	}
	return -1
}

func toSet(nums []int) map[int]struct{} {
	Set := make(map[int]struct{})
	for _, num := range nums {
		Set[num] = struct{}{}
	}
	return Set
}`;

const post = {
  num: 15,
  date: `2025-05-30T12:00:00Z`,
  tags: ["brute force", "hashmap"],
  difficulty: `medium`,
  languages: [`Go`],
  complexity: {
    time: `O(n^2 * log n)`,
    space: `O(n^2)`,
    timeExplanation: `Iterate over all pairs (i, j), then use a hash map lookup for the third number. The result deduplication uses string keys, so constant insertion/checks, but overall loop is O(n^2). Sorting each triplet is O(log 3) = O(1).`,
    spaceExplanation: `Hash map for number indices and a set for deduplicating triplets. In worst case, could store up to O(n^2) unique triplets.`,
  },
  performance: { time: 7, memory: 14 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.`,
        ]}
      />

      <Approach
        items={[
          `Sort the array first to make scanning easier and to ensure triplets are ordered consistently for deduplication.`,
          `Use a map to store all indices of each number. For every unique pair (i, j), compute the required third number to reach 0, and look it up in the index map.`,
          `Ensure the third index is different from i and j.`,
          `Sort each triplet before storing it, and use a map with a string key to avoid storing duplicates.`,
        ]}
      />
      <EdgeCases
        items={[
          `All zeros: if the set has only 0 and length >= 3, return a single triplet [0,0,0] early.`,
          `Multiple duplicate triplets: handled by using string deduplication map.`,
          `Negative and positive values interleaved: sorting the array upfront helps ensure order when forming string keys.`,
        ]}
      />

      <Reflections
        items={[
          `This was an exercise in edge-case handling. The brute-force double loop actually isn't too bad given the problem constraints, especially once the deduplication logic was cleaned up. Switching from O(n) equality checks with slices to using a map of string keys for O(1) lookup time came after the initial pass.`,
          `While not the optimal solution in terms of runtime, this version is readable, covers all edge cases, and was a fun way to grind out performance. The initial set check in the beginning is to cover the first edge case mentioned.`,
        ]}
      />
    </div>
  ),
};

export default post;
