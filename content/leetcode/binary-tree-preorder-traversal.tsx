import { Problem, Reflections } from "@/components/slug-helpers";

const goSolution = `func preorderTraversal(root *TreeNode) []int {
    var res []int
    var dfs func(root *TreeNode) 
    dfs = func(root *TreeNode) {
        if root == nil {
            return 
        }

        res = append(res, root.Val)
        dfs(root.Left)
        dfs(root.Right)
    }

    dfs(root)

    return res
}
`;

const post = {
  num: 144,
  date: `2025-05-30T12:00:00Z`,
  tags: ["stack", "tree", "depth first search", "binary tree"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
  },
  performance: { time: 100, memory: 32 },
  code: [goSolution],
  children: (
    <div>
      <Problem
        items={[
          `Given the root of a binary tree, return the preorder traversal of its nodes' values.
`,
        ]}
      />
      <Reflections items={[`Memorized at this point.`]} />
    </div>
  ),
};

export default post;
