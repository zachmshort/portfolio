const goSolution = `func middleNode(head *ListNode) *ListNode {
	fastNode := head
	slowNode := head

	for {
		if fastNode == nil || fastNode.Next == nil {
			break
		}
		fastNode = fastNode.Next.Next
		slowNode = slowNode.Next
	}

	if fastNode.Next != nil {
		slowNode = slowNode.Next
	}

	return slowNode
}`;

const post = {
  num: 876,
  date: "2025-05-24T00:00:00Z",
  tags: ["linked list", "two pointers"],
  code: [goSolution],
  languages: ["Go"],
  children: (
    <>
      <p>
        As soon as I saw the two pointer topic in the description, my mind
        jumped to the slow fast pointer. The basic theory is say you have two
        runners, one who runs at 10kpm and the other runs at 5kpm. Since the
        second runner goes exactly half as fast as the first runner, when the
        first runner finishes the race, the second runner should be exactly half
        way done. This satisfied 1/2 of the initial tests provided, but they
        added an edge case wherein if the linked list is even in length, you
        must take the second middle node. Which made me think of how I would be
        able to tell if it was even or odd. And after a few seconds I logged out
        the result of fastNode in both examples.
      </p>
      <p className={`mt-4`}>Input: [1,2,3,4,5], fastNode: [1,3,5]</p>
      <p className={`mb-4`}>Input: [1,2,3,4,5,6], fastNode: [1,3,5]</p>
      <p>
        The pattern here is that the even lengthed linked list has one more
        value after the last value of fastNode (6 after 5). Whereas in the odd
        length linked list, the last value of the input is also the last value
        of the fastNode. So all that is required is a simple check as to whether
        or not there is another value after fastNode, if there is, then the
        slowNode also must get shifted up one as well.
      </p>
    </>
  ),
};

export default post;
