import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func createBinaryTree(descriptions [][]int) *TreeNode {
    d := descriptions
    possibleRoots := make(map[int]bool)

    for i := 0; i < len(d); i++ {
        if _, found := possibleRoots[d[i][0]]; !found {
            possibleRoots[d[i][0]] = true
        }
        possibleRoots[d[i][1]] = false
    }

    head := &TreeNode{Val:0}
    for key, val := range possibleRoots {
        if val {
            head.Val = key
        }
    }
    head = buildTree(d, head)

    return head
}

func buildTree(d [][]int, head *TreeNode) *TreeNode{
    if head == nil {
        return nil
    }

    for i := 0; i < len(d); i++ {
        if d[i][0] == head.Val {
            head = insertVal(head, d[i])
        }
    }

    head.Left = buildTree(d, head.Left)
    head.Right = buildTree(d, head.Right)

    return head
}

func insertVal(head *TreeNode, description []int) *TreeNode {
    if description[2] == 1 {
        head.Left = &TreeNode{Val:description[1]}
    } else {
        head.Right = &TreeNode{Val:description[1]}
    }

    return head
}
`;

const post = {
  num: 2196,
  date: `2025-05-30T12:00:00Z`,
  tags: [`array`, `hash table`, `tree`, `binary tree`],
  difficulty: `medium`,
  languages: [`Go`],
  code: [goSolution],
  completed: false,
  testsPassed: "84/85",
  children: (
    <div>
      <Problem
        items={[
          `You're given a 2D integer array descriptions, where each entry [parent, child, isLeft] defines a parent-child relationship in a binary tree.`,
          `Parent is the value of the parent node`,
          `Child is the value of the child node`,
          `IsLeft is either 1 (if child is left) or 0 (right)`,
          `Construct the tree and return the root node.`,
        ]}
      />
      <Approach
        items={[
          "Put all the values of descriptions[:][0] where it is not present in the map, descriptions[][1] is automatically false in the possible roots map because that means it is a child. This leaves only one value to be the root.",
          "Find the left and right values in the description recursively and insert them.",
        ]}
      />

      <EdgeCases
        items={[
          `The tree can be very deep or unbalanced, so recursion must be safe.`,
          `Only one root exists by definition — so any node that is never a child is the root.`,
          `The input can be large (up to 10^4 nodes), so runtime matters.`,
        ]}
      />

      <Reflections
        items={[
          `Honestly, I like this solution. Even though it TLE’d on the last test case, it passed 84/85 and reads cleanly.`,
          `The main reason it’s slow is because it re-scans the entire array for every node recursively, which ends up O(n^2). That’s brutal on big inputs.`,
          `Still, the logic is super clear: find the root first, then recurse through the relationships.`,
          `I’ll come back and optimize this later with a map-based approach, but for now I’m happy with the logic as-is.`,
        ]}
      />
    </div>
  ),
};

export default post;
