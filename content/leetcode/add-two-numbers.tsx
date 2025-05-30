import ProblemLink from "@/app/blog/components/problem-link";
import { StrLLVisual } from "@/app/blog/components/string-ll-visual";
import { CodeSnippet } from "@/components/slug-helpers";

const goSolution = `func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	sum1, sum2 := getSumFromList(l1), getSumFromList(l2)
	sum := sum1 + sum2

	return createListFromSum(sum)
}

func createListFromSum(sum int) *ListNode {
    if sum == 0 {
        return &ListNode{Val: 0}
    }

    dummy := &ListNode{}
    current := dummy

    for sum > 0 {
        val := sum % 10
        current.Next = &ListNode{Val: val}
        current = current.Next
        sum /= 10
    }

    return dummy.Next
}

func getSumFromList(currentNode *ListNode) int {
	power := 0.0
	sum := 0
	for currentNode != nil {
		multiplier := math.Pow(10.0, power)
		localSum := currentNode.Val * int(multiplier)
		sum += localSum
		currentNode = currentNode.Next
		power += 1.0
	}

	return sum
}
`;

const goSnippet1 = `func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    curr := l1
    power := 0.0
    outputl1, outputl2   := 0, 0
    for curr != nil {
        multiplier := math.Pow(10.0, power) 
        sum := curr.Val * int(multiplier)
        outputl1 += sum
        curr = curr.Next
        power += 1.0
    }
    curr = l2
    power = 0.0
    for curr != nil {
        multiplier := math.Pow(10.0, power) 
        sum := curr.Val * int(multiplier)
        outputl2 += sum
        curr = curr.Next
        power += 1.0
    }

    sum := outputl1 + outputl2
    sumStr := strconv.Itoa(sum)
    
    var head *ListNode
    for i := 0; i < len(sumStr); i++ {
        val := int(sumStr[i] - '0')
        node := &ListNode{Val: val, Next: head}
        head = node
    }

    return head
}
`;

const post = {
  num: 2,
  tags: [`linked list`, `math`, `recursion`],
  code: [goSolution],
  date: `2025-05-27T12:00:00Z`,
  difficulty: `medium`,
  languages: [`Go`],
  completed: false,
  testsPassed: `1566/1569`,
  children: (
    <>
      <p>
        My immediate instict for this problem upon seeing the examples was to
        convert the linked list to a number, or sum. And for this I remembered
        the mathematical pattern that I also used in{" "}
        <ProblemLink name="9-palindrome-number" />.
      </p>
      <p>Take 342 for example:</p>
      <p>
        If this were in a linked list, for this problem, its linked list
        representation would be {StrLLVisual([2, 4, 3])}. Similar to the
        palindrome number problem, I simply take the the number given times 10
        to the power of whatever number loop it's on:
      </p>
      <ul className={`mt-3`}>
        <li>sum = 0</li>
        <li>val: 2</li>
        <li>power: 0</li>
        <li>2*10^0 = 2*1 = 2</li>
        <li>sum = 2 + 0 = 2</li>
        <li className={`mt-3`}>val: 4</li>
        <li>power: 1</li>
        <li>4*10^1 = 4*10 = 40</li>
        <li>sum = 2 + 40 = 42</li>
        <li className={`mt-3`}>val: 3</li>
        <li>power: 2</li>
        <li>3*10^2 = 3*100 = 3000</li>
        <li>sum = 300 + 42 = 342</li>
      </ul>
      <p>
        After finding the sum for each of these linked lists, my idea was to add
        them together and then convert that to a string and then go from front
        to back. This is my initial submission which also passed 1566/1569:
      </p>
      <CodeSnippet code={goSnippet1} />
      <p>I tried debugging why the following test case was failing: </p>
      <p>
        Input:
        <p>
          l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
        </p>
        <p>l2 = [5,6,4]</p>
      </p>
      <p>
        Eventually I gave up and looked at the leetcode discussion only to
        realize this is a common issue related to the max size of ints. So I
        decided to simply extract some of the code, clean up the logic, and
        leave it at that, hence the final submission.
      </p>
    </>
  ),
};

export default post;
