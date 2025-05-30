import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func isSameTree(p * TreeNode, q * TreeNode) bool {
  if p == nil && q == nil {
    return true
  }

  if p == nil || q == nil {
    return false
  }

  if p.Val != q.Val {
    return false
  }

  left:= isSameTree(p.Left, q.Left)
  right:= isSameTree(p.Right, q.Right)

  return left && right
}
`;

const post = {
  num: 100,
  date: `2025-05-30T12:00:00Z`,
  tags: ["binary tree", "depth first search", "breadth first search"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
  },
  performance: { time: 100, memory: 99.4 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given the roots of two binary trees p and q, write a function to check if they are the same or not.`,
          `Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.`,
        ]}
      />

      <Approach
        items={[
          `Base cases: if both nodes are null (leaves), return true safely. If one node is null and the other isn't there's an imbalance. If the node values aren't equal, they're not the same.`,
          `After passing all of the base cases, check if the tree's left and right subtree are true/false recursively, ensure both left and right are true at the end. `,
        ]}
      />

      <Reflections
        items={[
          `Fairly simple DFS problem in all honesty. One issue I did recognize fairly quickly was that I was using one truthy value for the left and right side, so if right was true it would return true, even when left was false.`,
        ]}
      />
    </div>
  ),
};

export default post;
