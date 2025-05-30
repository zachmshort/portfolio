import { Problem, Reflections } from "@/components/slug-helpers";

const goSolution = `func inorderTraversal(root *TreeNode) []int {
	var res []int
	
	return traverse(root, res)
}

func traverse(root *TreeNode, res []int) []int {
    if root == nil {
        return res
    }

    res = traverse(root.Left, res)
	res = append(res, root.Val)
	res = traverse(root.Right, res)

	return res
}
`;

const post = {
  num: 94,
  date: `2025-05-30T12:00:00Z`,
  tags: ["stack", "tree", "depth first search", "binary tree"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
  },
  performance: { time: 100, memory: 82 },
  code: [goSolution],
  children: (
    <div>
      <Problem
        items={[
          `Given the root of a binary tree, return the inorder traversal of its nodes' values.
`,
        ]}
      />
      <Reflections
        items={[
          `There is probably a more efficient way to do it but all of the solutions posted had worse space complexity than mine.`,
        ]}
      />
    </div>
  ),
};

export default post;
