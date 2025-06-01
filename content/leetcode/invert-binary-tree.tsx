import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func invertTree(root *treenode) *treenode {
    var dfs func(root *treenode)
    dfs = func(node *treenode) {
        if node == nil {
            return
        }

        dfs(node.left)
        dfs(node.right)
        node.left, node.right = node.right, node.left
    }

    dfs(root)
    return root
}


`;

const post = {
  num: 226,
  date: `2025-05-31T12:00:00Z`,
  tags: ["binary tree", "depth first search"],
  difficulty: `easy`,
  languages: [`Go`],

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given the root of a binary tree, invert the tree and return its root.
`,
        ]}
      />

      <Approach
        items={[
          `dfs to leaf nodes and swap left and right children all the way back up.`,
        ]}
      />
    </div>
  ),
};

export default post;
