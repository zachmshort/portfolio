import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func removeElements(head *ListNode, val int) *ListNode {
	dummy := &ListNode{Val: 0, Next: head}
	curr := dummy

	if curr == nil {
		return nil
	}

	for curr != nil {
		for curr.Next != nil && curr.Next.Val == val {
			if curr.Next != nil {
				curr.Next = curr.Next.Next
			} else {
				curr.Next = nil
			}
		}
        curr = curr.Next
	}

	return dummy.Next
}

`;

const post = {
  num: 203,
  date: `2025-05-31T12:00:00Z`,
  tags: ["linked list"],
  difficulty: `easy`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
  },
  performance: { time: 100, memory: 80 },

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.`,
        ]}
      />

      <Approach
        items={[
          `Create a dummy node whose next value is the head`,
          `Iterate through the list with the head (curr) and set its next value to next.next or nil depending on the value of next`,
          `Return next.next`,
        ]}
      />
    </div>
  ),
};

export default post;
