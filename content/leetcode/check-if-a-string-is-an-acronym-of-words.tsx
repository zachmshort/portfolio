import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func isAcronym(words []string, s string) bool {
    if len(words) != len(s) {
        return false
    }

    for i := range words {
        if words[i][0] != s[i] {
            return false
        }
    }
    return true
}
`;

const post = {
  num: 2828,
  date: `2025-06-02T12:00:00Z`,
  tags: ["array", "string"],
  difficulty: `easy`,
  languages: [`Go`],

  code: [goSolution],

  children: (
    <Problem
      items={[`Return true if s is an acronym of words, and false otherwise.`]}
    />
  ),
};

export default post;
