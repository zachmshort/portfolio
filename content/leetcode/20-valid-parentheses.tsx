const post = {
  title: "Valid Parenthesis",
  date: "2025-04-08T00:00:00Z",
  tags: ["string", "stack"],
  languages: ["Python"],
  code: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        open_brackets = ["[", "{", "("]
        for c in s:
            if c in open_brackets:
                stack.append(c)
            elif c == "}" and stack and stack[-1] == "{":  
                stack.pop() 
            elif c == "]" and stack and stack[-1] == "[":
                stack.pop() 
            elif c == ")" and stack and stack[-1] == "(":
                stack.pop() 
            else:
                return False  
        return len(stack) == 0
`,
  children: (
    <p>
      I completed this problem the same time that we were going over stacks in
      DSA. So when I came across it I immediately knew that a stack would be
      necessary to complete this problem. At some point I will need to redo it
      in Go instead of Python, however I had just written a delimeter check for
      a project, so python was the most straight forward approach.
    </p>
  ),
};

export default post;
