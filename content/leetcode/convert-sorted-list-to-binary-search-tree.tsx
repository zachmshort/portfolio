import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func sortedListToBST(head *ListNode) *TreeNode {
    nums := linkedListToArray(head)
    if len(nums) == 0 {
        return nil
    }

    if len(nums) == 1 {
        return &TreeNode{Val:nums[0]}
    }
    
    mid := len(nums)/2

    node := &TreeNode{Val:nums[mid]}

    leftArr := nums[:mid]
    rightArr := nums[mid+1:]

    node.Left = insert(leftArr)
    node.Right = insert(rightArr)

    return node
}

func insert(nums []int) *TreeNode {
     if len(nums) == 0 {
        return nil
    }

    if len(nums) == 1 {
        return &TreeNode{Val:nums[0]}
    }
 
    mid := len(nums)/2

    node := &TreeNode{Val:nums[mid]}

    leftArr := nums[:mid]
    rightArr := nums[mid+1:]

    node.Left = insert(leftArr)
    node.Right = insert(rightArr)

    return node

}

func linkedListToArray(node *ListNode) []int {
    var nums []int

    for node != nil {
        nums = append(nums,node.Val)
        node = node.Next    
    }

    return nums
}`;

const post = {
  num: 109,
  date: `2025-05-30T12:00:00Z`,
  tags: ["linked list", "divide and conquer", "binary search tree"],
  difficulty: `medium`,
  languages: [`Go`],
  complexity: {
    time: `O(n)`,
    space: `O(n)`,
    timeExplanation: `You convert the linked list to an array in O(n), then recursively build the BST by visiting each element once. Total work done across all recursive calls is linear.`,
    spaceExplanation: `O(n) to store the array converted from the linked list, plus O(log n) recursion stack space. Tree nodes also use O(n) memory, which is required output space.`,
  },
  performance: { time: 21.92, memory: 20.55 },
  code: [goSolution],
  children: (
    <div>
      <Problem
        items={[
          `Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.`,
        ]}
        input="head = [-10,-3,0,5,9]"
        output="[0,-3,9,-10,null,5]"
      />

      <Approach
        items={[
          `Convert the linked list into an array so that elements can be accessed in O(1) time. Then use a divide-and-conquer strategy: recursively pick the middle element as the root, and apply the same logic to the left and right subarrays.`,
          `This simplifies pointer logic compared to working directly with the list, at the cost of extra space. The split-and-recursively-build logic mirrors the classic sorted array to BST pattern.`,
        ]}
      />
      <EdgeCases items={[`[] → nil`]} />

      <Reflections
        items={[
          `This was my first medium-level problem, and it felt like a solid step up from the easier problems. Having solved 108 recently helped because the approach.`,
          `I'm not proud of the performance, beating only 22% on time and 20% on memory. But the extra conversion step from linked list to array paid off in simplicity during the tree construction phase.`,
          `I have no doubt there is a version of this that is possible with a slow and fast pointer on the linked list, and I'll try it at some point.`,
        ]}
      />
    </div>
  ),
};

export default post;
