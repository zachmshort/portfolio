import { Problem, Reflections } from "@/components/slug-helpers";

const goSolution = `func preorder(root * Node)[]int {
  var res []int
  var dfs func(node * Node)
  dfs = func(node * Node) {
    if node == nil {
      return
    }

    res = append(res, node.Val)
    for _, child := range(node.Children) {
      dfs(child)
    }
  }

  dfs(root)
  return res
}
`;

const post = {
  num: 589,
  title: "N-ary Tree Preorder Traversal",
  date: `2025-05-30T12:00:00Z`,
  tags: ["stack", "tree", "depth first search"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n + h)`,
    spaceExplanation: ` - h is height of tree, if its nothing more than a degenerate linked list`,
  },
  performance: { time: 60, memory: 80 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
`,
        ]}
      />
      <Reflections items={[`Memorized at this point.`]} />
    </div>
  ),
};

export default post;
