import { StrLLVisual } from "@/app/blog/components/string-ll-visual";

const goSolution = `func reverseList(head *ListNode) *ListNode {
	var prev *ListNode 
	curr := head

	for curr != nil {
        next := curr.Next
		curr.Next = prev
		prev = curr
		curr = next
	}

	return prev
}
`;

const post = {
  title: "Reverse Linked List",
  date: "2025-05-24T12:00:00Z",
  tags: ["linked list"],
  code: [goSolution],
  languages: ["Go"],
  children: (
    <>
      <p>
        This was one of the methods on a project in DSA so implementation was
        fairly straightforward. The basic methodology is that you must keep
        track of three running variables at a time. There's previous node,
        current node, and next node. The previous node always starts off as null
        because it will be the tail's previous at the end. The current node
        initializes as the head node, and next is current's next. Then you
        essentially just point current to previous, then increment all of the
        pointers.
      </p>
      <p className={`mt-3`}>Ex: </p>
      <p className={`mt-3`}>{StrLLVisual([1, 2, 3])}</p>
      <ul className={`my-3`}>
        <li>Prev: null</li>
        <li>Curr: 1</li>
        <li>Next: Curr.Next = 1</li>
      </ul>

      <p className={`mt-3`}> null &lt;- 1 2 -{">"} 3</p>
      <p className={`my-3`}>
        Now swap curr to point to the previous. (1-{">"}null), and then update
        the rest of the values
      </p>
      <ul className={`my-3`}>
        <li>Prev: 1</li>
        <li>Curr: 2</li>
        <li>Next: Curr.Next = 3</li>
      </ul>
      <p className={`mt-3`}> null &lt;- 1 &lt;- 2 3</p>
      <p>Repeat this process & the entire Linked List will end up reversed.</p>
      <p className={`mt-3`}> 1 &lt;- 2 &lt;- 3</p>
      <p>or</p>

      <p>{StrLLVisual([3, 2, 1])}</p>
    </>
  ),
};

export default post;
