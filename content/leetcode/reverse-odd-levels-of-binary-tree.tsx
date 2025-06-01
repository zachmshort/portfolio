import { Approach, Problem, Reflections } from "@/components/slug-helpers";

const goSolution = `func reverseOddLevels(root *TreeNode) *TreeNode {
    level := 0    

    var dfs func(node, node2 *TreeNode, level int) (*TreeNode, *TreeNode)
    dfs = func(node,  node2 *TreeNode, level int) (*TreeNode, *TreeNode) {
        if node == nil {
            return nil,nil
        }

        dfs(node.Left, node2.Right, level + 1)
        dfs(node.Right,node2.Left, level + 1)

        if level % 2 == 0 {
            node.Val,node2.Val = node2.Val,node.Val
        }

        return node, node2
    }

    if root.Left == nil {
        return root
    }

    dfs(root.Left, root.Right, level)
    return root
}

`;

const post = {
  num: 2415,
  date: `2025-05-31T12:00:00Z`,
  tags: ["binary tree", "depth first search"],
  difficulty: `easy`,
  languages: [`Go`],
  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given the root of a perfect binary tree, reverse the node values at each odd level of the tree.`,
        ]}
      />
      <Approach
        items={[
          `Check if level % 2 == 0, because I did it at even levels.`,
          `Swap the nodes values in place rather than the children like in Invert Tree`,
        ]}
      />

      <Reflections
        items={[
          `The only thing I didn't have right for the longest time was not send left of one node and right of the other until I read the second hint.`,
        ]}
      />
    </div>
  ),
};

export default post;
