import {
  Approach,
  EdgeCases,
  Problem,
  Reflections,
} from "@/components/slug-helpers";

const goSolution = `func construct2DArray(original []int, m int, n int) [][]int {
    if m * n != len(original) {
        return [][]int{}
    }

    res := [][]int{}
    for i := 0; i < m; i++ {
        res = append(res, original[n*i:i*n+n])
    }
    return res
}

`;

const post = {
  num: 2022,
  title: "Convert 1D Array Into 2D Array",
  date: `2025-05-31T12:00:00Z`,
  tags: ["array", "matrix", "simulation"],
  difficulty: `easy`,
  languages: [`Go`],
  code: [goSolution],
  children: (
    <div>
      <Problem
        items={[
          `You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.`,
        ]}
      />

      <Reflections items={[`It's just math`]} />
    </div>
  ),
};

export default post;
