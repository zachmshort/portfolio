import {
  Approach,
  CodeSnippet,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = ``;
const observations = `ex: status = [1,0,1,0]
candies = [7,5,4,100] 
keys = [[],[],[1],[]] 
containedBoxes = [[1,2],[3],[],[]]
initialBoxes = [0]

- start of at status[0] because thats the index of inital boxes given
- status 0 is now visited
- inside of status[0] we get candies[0] (7), no keys, and boxes 1 and 2.
- try to open status[1], but cannot because we didnt get a key for it and its locked, but its still not visited.
- freely open status[2], because theres no key needed, status[2] is now visited
- inside of status 2, we get 4 more candies, and the key to box 1.
- open box two now because we have a key.
- in box 1, we get 5 more candies, and the key to 3.
- in box three, we get 100 more candies, but no more keys, so we can exit.

observations
1. need to keep track of which boxes have been visited to avoid possible loops
2. if initialBoxes is empty, we cannot visit any of the boxes
3. cannot use a loop because its not garunteed to find a key/box be open
    a. need to get a reference from a chest to open a box
4. we are done when all of the boxes have been visited/no more references to new boxes
5. the contained boxes tell us what we get to open next, thats what gets added to the dq
6. need to keep track of available keys
7. you can open a box if you either have the key for it or its open.

solutions to observations
1. make an array of booleans the same length as the status and mark the index we start visiting as true 
2. check if len(initialBoxes) == 0 return 0
3. bfs with queue to track which boxes are up for search
4. for loop checks for len(boxes) > 0
`;

const post = {
  num: 1298,
  date: `2025-06-03T12:00:00Z`,
  tags: ["array", "bredth first search", "graph"],
  difficulty: `easy`,
  languages: [`Go`],

  code: [goSolution],

  children: (
    <div>
      <Problem
        items={[
          `You have n boxes labeled from 0 to n - 1. You are given four arrays: status, candies, keys, and containedBoxes where:`,
          `status[i] is 1 if the ith box is open and 0 if the ith box is closed.`,
          `candies[i] is the number of candies in the ith box.`,
          `keys[i] is a list of the labels of the boxes you can open after opening the ith box.`,
          `containedBoxes[i] is a list of the boxes you found inside the ith box.`,
          `You are given an integer array initialBoxes that contains the labels of the boxes you initially have. You can take all the candies in any open box and you can use the keys in it to open new boxes and you also can use the boxes you find in it.
`,
          `Return the maximum number of candies you can get following the rules above.`,
        ]}
      />

      <Approach
        items={[
          `Thoroughly go through an example problem to determine patterns, as show below.`,
        ]}
      />
      <CodeSnippet code={observations} />

      <Reflections
        items={[
          `This is my second hard problem. So having completed this with most of the proper core functionality in just over 45 minutes, I'm pretty happy with it. I understand after the fact that looping through the deque to find the next openable box isn't omptimal and I'd love to revisit this problem at some point.`,
        ]}
      />
    </div>
  ),
};

export default post;
