import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func sortedArrayToBST(nums []int) *TreeNode {
	if len(nums) == 1 {
		return createNode(nums[0])
	}

	mid := len(nums) / 2

	leftArr := nums[:mid]
	rightArr := nums[mid+1:]

	head := createNode(nums[mid])

	head.Left = insert(leftArr, head.Left)
	head.Right = insert(rightArr, head.Right)

	return head
}

func insert(nums []int, head *TreeNode) *TreeNode {
	if len(nums) == 0 {
		return nil
	}

	if len(nums) == 1 {
		return createNode(nums[0])
	}

	mid := len(nums) / 2

	leftArr := nums[:mid]
	rightArr := nums[mid+1:]

	head = createNode(nums[mid])

	head.Left = insert(leftArr, head.Left)
	head.Right = insert(rightArr, head.Right)

	return head
}

func createNode(val int) *TreeNode {
	return &TreeNode{Val: val, Left: nil, Right: nil}
}
`;

const post = {
  num: 108,
  date: `2025-05-29T12:00:00Z`,
  tags: ["array", "divide and conquer", "binary tree"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
    timeExplanaiton: `Every node must be visited atleast once. Splitting the array, and creating the header are both constant operations.`,
    spaceExplanation: `Every array element becomes one node → n nodes → O(n) space. Depth is O(log n) for a balanced BST → O(log n) extra space. The array operation dominates. So O(n)`,
  },
  performance: { time: 100, memory: 77.88 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree",
        ]}
        input="nums = [-10,-3,0,5,9]"
        output="[0,-3,9,-10,null,5]"
      />

      <Approach
        items={[
          "Make the middle of the array the head node's value",
          "Split the array into a left array and right array",
          "Recursive call on the helper function insert on node.Left and node.Right with left array and right array respectively",
          "Base Case: len(nums) == 1, means the array has been cut as far as it can be. ",
          "Recursive Step: Bullets 1-3",
        ]}
      />

      <EdgeCases items={[`Input: [] -> null`]} />

      <Reflections
        items={[
          `I am honestly quite proud of myself for thinking of this solution without any outside help. I do not believe that this is an easy problem.`,
          `After looking at other peoples solutions, I recognize that the helper insert function is not explicity necessary. However, when I used other peoples solutions where they just recursively called the primary function, their solutions ended up all being far less optimal as far as memory is concerned, as in orders of magnitude worst (25% vs 75%). `,
          `I also now know that you do not have to initialize all of the values in a struct in a Go, I just always assumed that because it is a strongly typed language that you have to intialize left and right as nil on a tree node for example but you dont.`,
        ]}
      />
    </div>
  ),
};

export default post;
