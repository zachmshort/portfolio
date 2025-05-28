const post = {
  title: "Longest Common Prefix",
  date: "2025-01-28T12:00:00Z",
  tags: ["string", "trie"],
  languages: ["Go"],
  code: `func longestCommonPrefix(strs []string) string {
    var result string
    shortestWord := strs[0]

    for i := 0; i < len(strs); i++ {
        if len(shortestWord) > len(strs[i]) {
            shortestWord = strs[i]
        }
    }

    for i := 0; i < len(shortestWord); i++ {
        count := 0
        for j := 0; j < len(strs); j++ {
            
            if string(shortestWord[i]) == string(strs[j][i]) {
                count++
            } else {
                return result
            }
            if count == len(strs) {
                result += string(shortestWord[i])
            } 
        }
    }
    return result
}
`,
  children: <p></p>,
};

export default post;
