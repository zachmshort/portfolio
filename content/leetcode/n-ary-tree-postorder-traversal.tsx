import { Problem, Reflections } from "@/components/slug-helpers";

const goSolution = `func postorder(root *Node) []int {
    var res []int
    var dfs func(node *Node)
    dfs = func(node *Node) {
        if node == nil {
            return
        }

        for _,child := range(node.Children) {
            dfs(child)
        }
        res = append(res, node.Val)
    }
    dfs(root)
    return res
}
`;

const post = {
  num: 590,
  title: "N-ary Tree Postorder Traversal",
  date: `2025-05-30T12:00:00Z`,
  tags: ["stack", "tree", "depth first search"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n + h)`,
    spaceExplanation: ` - h is height of tree, if its nothing more than a degenerate linked list`,
  },
  performance: { time: 100, memory: 78.67 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
`,
        ]}
      />
      <Reflections
        items={[
          `Memorized at this point. For the record I am not merely copying the dfs func from previous challenges. I am rewriting it each time.`,
        ]}
      />
    </div>
  ),
};

export default post;
