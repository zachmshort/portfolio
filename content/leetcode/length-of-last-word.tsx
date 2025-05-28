const pySolution = `class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s = s.strip()

        start = len(s) - 1
        while s[start] != " " and start >= 0:
            start -= 1
        
        return len(s[start+1:])`;

const post = {
  num: 58,
  date: "2025-04-08T00:00:00Z",
  tags: ["string"],
  code: [pySolution],
  languages: ["Python"],
  children: <p></p>,
};

export default post;
