import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    if list1 == nil {
        return list2
    }
    
    if list2 == nil {
        return list1
    }

    var node *ListNode
    if list1.Val < list2.Val {
        node = list1
        node.Next = mergeTwoLists(list1.Next, list2)
    } else {
        node = list2
        node.Next = mergeTwoLists(list1, list2.Next)
    }

    return node
}
`;

const post = {
  num: 21,
  date: `2025-05-31T12:00:00Z`,
  tags: ["linked list", "recursion"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
  },
  performance: { time: 100, memory: 61 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `You are given the heads of two sorted linked lists list1 and list2.`,
          `Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.`,
          `Return the head of the merged linked list.`,
        ]}
      />

      <Approach
        items={[
          `If either of the nodes are nil, return the other`,
          `Otherwise use the lower value node and skip to its next recursively`,
        ]}
      />
    </div>
  ),
};

export default post;
