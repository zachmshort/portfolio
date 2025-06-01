import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
    if root1 == nil && root2 == nil {
        return nil
    }
    if root1 == nil {
        return root2
    }
    if root2 == nil {
        return root1
    }

    root1.Left = mergeTrees(root1.Left, root2.Left)
    root1.Val = root1.Val + root2.Val
    root1.Right = mergeTrees(root1.Right, root2.Right)

    return root1
}

`;

const post = {
  num: 617,
  date: `2025-05-31T12:00:00Z`,
  tags: ["tree", "binary tree", "depth first search"],
  difficulty: `easy`,
  languages: [`Go`],

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `You are given two binary trees root1 and root2. Return the merged tree.
`,
        ]}
      />

      <Approach
        items={[
          `Traverse both trees simultaneously and recursively`,
          `Trust the base cases`,
          `Essentially copy over everything from root2 to root1 and if they overlap then merge`,
        ]}
      />
    </div>
  ),
};

export default post;
