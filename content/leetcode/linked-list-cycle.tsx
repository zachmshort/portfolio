import {
  Approach,
  CodeSnippet,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func hasCycle(head *ListNode) bool {
    slow,fast := head,head
    for fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
        if slow == fast {
            return true
        }
    }

    return false
}
`;

const codeSnippet = `func hasCycle(head *ListNode) bool {
    m := make(map[*ListNode]bool)

    node := head
    for node != nil {
        if m[node] {
            return true
        }
        m[node] = true
        node = node.Next
    }

    return false
}
`;

const post = {
  num: 141,
  date: `2025-05-31T12:00:00Z`,
  tags: ["linked list", "hash table", "two pointer"],
  difficulty: `easy`,
  languages: [`Go`],

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `Return true if there is a cycle in the linked list. Otherwise, return false.
`,
        ]}
      />

      <Approach
        items={[
          `Keep looping the one node fast as twice as the other until they either run into eachother or exit the linked list`,
        ]}
      />

      <Reflections items={[`I also did the hashmap version`]} />
      <CodeSnippet code={codeSnippet} />
    </div>
  ),
};

export default post;
