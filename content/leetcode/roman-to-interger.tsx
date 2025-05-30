const post = {
  num: 13,
  date: "2025-04-28T00:00:00Z",
  tags: ["hash-table", "math", "string"],
  languages: ["Go"],
  code: [
    `func romanToInt(s string) int {
    numerals := map[string]int{"I":1, "V": 5, "X":10, "L":50, "C":100, "D":500, "M":1000}

    res := 0
    for i := len(s) - 1; i >= 0; i-- {
        numeral := string(s[i])


        if i <= len(s) - 2 {
            prevNumeral := string(s[i+1])
            if numerals[numeral] < numerals[prevNumeral] {
                res = res - numerals[numeral]
            } else {
                res = res + numerals[numeral]
            }
        } else {
            res = res + numerals[numeral]
        }
    }

    return res
}
`,
  ],
  children: <p></p>,
};

export default post;
